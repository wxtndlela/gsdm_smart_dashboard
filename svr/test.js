const { exec } = require('child_process');
const fs = require('fs');
const treeKill = require('tree-kill');

const rtspURL = 'rtsp://admin:Londeka123@192.168.15.198:554/live';
const filePath = 'rec.dat';

let recordingProcess = null;

function createRecordingFolder(folderName) {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
}

function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${year}${month}${day}_${hours}${minutes}${seconds}`;
}

function startRecording() {
  const folderName = fs.readFileSync(filePath, 'utf-8').trim();
  createRecordingFolder(folderName);
  const fileName = getCurrentDateTime();
  const outputPath = `${folderName}/${fileName}.mp4`;

  console.log('Starting recording...');
  recordingProcess = exec(`ffmpeg -i ${rtspURL} -c copy ${outputPath}`);

  recordingProcess.stdout.on('data', (data) => {
    console.log(data);
  });

  recordingProcess.stderr.on('data', (data) => {
    console.error(data);
  });

  recordingProcess.on('close', (code) => {
    console.log(`Recording stopped with code ${code}`);
    recordingProcess = null;
    waitForFile(); // Restart recording when it gets stopped
  });
}

function stopRecording() {
  if (recordingProcess) {
    console.log('Stopping recording...');
    recordingProcess.kill('SIGINT'); // Send SIGINT signal
    
    treeKill(recordingProcess.pid, 'SIGTERM', (err) => {
      if (err) {
        console.error('Failed to stop recording:', err);
      }
      recordingProcess = null;
    });
  }
}

// Wait for the file to exist, then start or stop recording
function waitForFile() {
  if (fs.existsSync(filePath)) {
    if (!recordingProcess) {
      startRecording();
    }
  } else {
    stopRecording();
  }
  setTimeout(waitForFile, 1000); // Retry after 1 second
}

waitForFile(); // Start waiting for the file
