//Install express server
const express = require("express");
const path = require("path");
const { spawn } = require("child_process");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const fs = require("fs");
const { exec } = require('child_process');



const https = require("https");

const app = express();

const host = "192.168.15.187";

let stream = null;
let recordingFile = 'rec.dat';
let ffmpeg = null; // Child process instance

const streamConfig = {
  name: 'stream',
  url: 'rtsp://admin:Londeka123@192.168.15.198:554/live',
  format: 'mp4',
  output: 'output.mp4'
};

app.use(cors());
app.use(bodyParser.json());

//This portion is for running a 3D player

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const viewsDir = path.join(__dirname, "views");
app.use(express.static(viewsDir));
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.static(path.join(__dirname, "./images")));
app.use(express.static(path.join(__dirname, "./media")));
app.use(express.static(path.join(__dirname, "./dist")));
app.use(express.static(path.join(__dirname, "./src")));
app.use("/tiles", express.static(path.join(__dirname, "tiles")));

app.use("/leaflet.css", express.static(path.join(viewsDir, "leaflet.css")));
app.use("/leaflet.js", express.static(path.join(viewsDir, "leaflet.js")));

app.get("/", (req, res) => res.sendFile(path.join(viewsDir, "index.html")));

// Serve the index.html file
app.get("/map", (req, res) => {
  res.sendFile(path.join(viewsDir, "map.html"));
});

// Serve the index.html file
app.get("/record", (req, res) => {
  res.sendFile(path.join(viewsDir, "rec.html"));
});


app.post("/startrec", (req, res) => {
  const { road_id } = req.body;
  //console.log(req.body);

  const pythonProcess = spawn("python", ["startrec.py", road_id]);

  let output = ""; // Variable to store the output

  pythonProcess.stdout.on("data", (data) => {
    output += data.toString(); // Collect the output
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(data.toString());
  });

  pythonProcess.on("close", (code) => {
    // Send the output as JSON response to the Angular frontend
    res.json({ output });
  });
});

app.post("/checkdat", (req, res) => {

  const folderPath = 'public';
  const fileName1 = 'rec.dat';
  const fileName2 = 'uploading.dat';

  const filePath1 = path.join(folderPath, fileName1);
  const filePath2 = path.join(folderPath, fileName2);

  fs.access(filePath1, fs.constants.F_OK, (err) => {
    if (err) {
      fs.access(filePath2, fs.constants.F_OK, (err) => {
        if (err) {
          res.json('none') 
          
        } else {
          res.json('uploading')
        }
      });

    } else {
      res.json('rec')
    }
  });

});

app.post("/stoprec", (req, res) => {
  
  const { road_id } = req.body;
  console.log(req.body);

  const pythonProcess = spawn("python", ["stoprec.py", road_id]);

  let output = ""; // Variable to store the output

  pythonProcess.stdout.on("data", (data) => {
    output += data.toString(); // Collect the output
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(data.toString());
  });

  pythonProcess.on("close", (code) => {
    // Send the output as JSON response to the Angular frontend
    res.json({ output });
  });
});


//This portion is for running a 3D player

app.post("/run-script", (req, res) => {
  const { url } = req.body;
  const { fname } = req.body;
  const { road_id } = req.body;
  //console.log(req.body);

  const pythonProcess = spawn("python", ["getimages.py", url, fname, road_id]);

  let output = ""; // Variable to store the output

  pythonProcess.stdout.on("data", (data) => {
    output += data.toString(); // Collect the output
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(data.toString());
  });

  pythonProcess.on("close", (code) => {
    // Send the output as JSON response to the Angular frontend
    res.json({ output });
  });
});

// Download-specific map tiles route
app.get("/download-specific", async (req, res) => {
  const tileURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const minLat = -26.706652; // South
  const minLon = 28.554295; // West
  const maxLat = -26.613224; // North
  const maxLon = 28.640984; // East
  const zoom = 15;

  const directory = "./tiles";
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }

  const latToTile = (lat, zoom) =>
    Math.floor(
      ((1 -
        Math.log(
          Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)
        ) /
          Math.PI) /
        2) *
        Math.pow(2, zoom)
    );
  const lonToTile = (lon, zoom) =>
    Math.floor(((lon + 180) / 360) * Math.pow(2, zoom));

  const minTileX = lonToTile(minLon, zoom);
  const maxTileX = lonToTile(maxLon, zoom);
  const minTileY = latToTile(maxLat, zoom);
  const maxTileY = latToTile(minLat, zoom);

  const downloadPromises = [];

  for (let x = minTileX; x <= maxTileX; x++) {
    for (let y = minTileY; y <= maxTileY; y++) {
      const url = tileURL
        .replace("{s}", "a")
        .replace("{z}", zoom.toString())
        .replace("{x}", x.toString())
        .replace("{y}", y.toString());

      const options = {
        headers: {
          "User-Agent": "GSDM Inspection App",
        },
      };

      const downloadPromise = new Promise((resolve, reject) => {
        https.get(url, options, (response) => {
          if (response.statusCode !== 200) {
            console.error(`Failed to download tile ${url}`);
            reject();
            return;
          }

          const filePath = `${directory}/${zoom}_${x}_${y}.png`;
          const fileStream = fs.createWriteStream(filePath);
          response.pipe(fileStream);

          fileStream.on("finish", () => {
            console.log(`Downloaded tile ${url}`);
            resolve();
          });

          fileStream.on("error", (error) => {
            console.error(`Failed to save tile ${url}`, error);
            reject();
          });
        });
      });

      downloadPromises.push(downloadPromise);
    }
  }

  Promise.all(downloadPromises)
    .then(() => {
      console.log("All tiles downloaded");
      res.redirect("http://" + host + ":3000/map");
    })
    .catch((error) => {
      console.error("Error downloading tiles", error);
      res.status(500).send("Error downloading tiles");
    });
});

// Start the server
app.listen(3000, host, () => {
  console.log("Server running on http://" + host + ":3000");
});



function request(url, returnBuffer = true, timeout = 10000) {
  return new Promise(function (resolve, reject) {
    const options = Object.assign(
      {},
      {
        url,
        isBuffer: true,
        timeout,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
        },
      },
      returnBuffer ? { encoding: null } : {}
    );

    get(options, function (err, res) {
      if (err) return reject(err);
      return resolve(res);
    });
  });
}
