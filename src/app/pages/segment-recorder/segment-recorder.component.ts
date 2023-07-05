/// <reference types="@types/dom-mediacapture-record" />

import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
} from "@angular/core";
import { LoadingController, ModalController } from "@ionic/angular";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { StreamRecorderService } from "../../../services/stream-recorder";
import flvjs from "flv.js";
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { Segments, SegmentMedia } from "../../../services/db";
import { AddSegment, AddSegmentMediaModal } from "../../../providers";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-segment-recorder",
  templateUrl: "./segment-recorder.component.html",
  styleUrls: ["./segment-recorder.component.scss"],
})
export class SegmentRecorderComponent implements OnInit {
  @ViewChild("videoElement") videoElement: ElementRef<HTMLVideoElement>;

  @Input("roadid") roadid;
  @Input("rectype") rectype;

  @ViewChild("videoEl") videoEl!: ElementRef<HTMLVideoElement>;
  @ViewChild("canvasEl") canvasEl!: ElementRef<HTMLCanvasElement>;

  mediaRecorder!: MediaRecorder;
  recordedChunks: BlobPart[] = [];
  recording = false;
  showpercent: any;
  uploadPercent: any;
  downloadURL: any;
  uploading: boolean = false;
  downloading: boolean = false;
  data: any;
  url_start: any;
  url_stop: any;
  url_main: any;
  is3d = false;

  constructor(
    private modalController: ModalController,
    private storage: AngularFireStorage,
    private db_m: SegmentMedia,
    private httpClient: HttpClient,
    private streamRecorderService: StreamRecorderService
  ) {}

  ngOnInit(): void {}

  dismiss() {
    if (this.mediaRecorder && this.mediaRecorder.state !== "inactive") {
      this.mediaRecorder.stop();
    }

    this.modalController.dismiss();
  }
  async ngAfterViewInit() {
    this.url_main = "http://192.168.1.102:2000/api";
  
    this.data = { roadID: this.roadid };

    console.log(this.rectype);

    if (this.rectype == "recondevice") {
      const constraints = { video: true, audio: false };
      //const stream = await navigator.mediaDevices.getUserMedia(constraints);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: {
          facingMode: { exact: "environment" }, // use the back camera
        },
      });
      this.videoEl.nativeElement.srcObject = stream;
      // this.mediaRecorder = new MediaRecorder(stream, { mimeType: "video/mp4" });
      if (MediaRecorder.isTypeSupported("video/mp4")) {
        this.mediaRecorder = new MediaRecorder(stream, {
          mimeType: "video/mp4",
        });
      } else {
        this.mediaRecorder = new MediaRecorder(stream, {
          mimeType: "video/webm",
        });
      }
      this.mediaRecorder.addEventListener("dataavailable", (event) => {
        if (event.data.size > 0) {
          this.recordedChunks.push(event.data);
        }
      });
      this.mediaRecorder.addEventListener("stop", () => {
        const recordedBlob = new Blob(this.recordedChunks, {
          type: "video/mp4",
        });
        this.uploading = true;
        this.saveBlobtoDB(recordedBlob);
      });
      const context = this.canvasEl.nativeElement.getContext("2d")!;
      const width = this.videoEl.nativeElement.videoWidth;
      const height = this.videoEl.nativeElement.videoHeight;
      this.canvasEl.nativeElement.width = width;
      this.canvasEl.nativeElement.height = height;
      setInterval(() => {
        if (
          this.videoEl.nativeElement.paused ||
          this.videoEl.nativeElement.ended
        ) {
          return;
        }
        context.drawImage(this.videoEl.nativeElement, 0, 0, width, height);
      }, 16);
    }
  }

  startRecording_3d() {
    this.is3d = true;
    this.recording = true;
    this.downloading = false;
    var httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }),
    };
    
    var data = {
      command: "recstart",
      roadid: this.roadid,
    };
    
    this.httpClient.post(this.url_main, data, httpOptions).subscribe((data) => {
      console.log(data);
    });
    
    fetch(this.url_main, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          this.recording = false;
          throw new Error("Network response was not ok");
        }
        this.recording = true;
        return response.json();
      })
      .then((data) => {
        this.recording = true;
        console.log(data);
      })
      .catch((error) => {
        this.recording = false;
        console.error("Error:", error);
      });
  }

  stopRecording_3d() {
    this.recording = false;
    this.downloading = false;
    this.is3d = true;
  
    this.recording = true;
    var httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }),
    };
    
    var data = {
      command: "recstop",
      roadid: this.roadid,
    };
    
    this.httpClient.post(this.url_main, data, httpOptions).subscribe((data) => {
      console.log(data);
    });
    
    fetch(this.url_main, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log("[REC:]",response)
        if (!response.ok) {
          this.recording = false;
          throw new Error("Network response was not ok");
        }
        this.recording = true;
        return response.json();
      })
      .then((data) => {
        this.recording = false;
        console.log(data);
      })
      .catch((error) => {
        this.recording = false;
        console.error("Error:", error);
      });
  }

  downloadRecording_3d() {
    this.recording = false;
    this.downloading = true;
    this.is3d = false;
 

    var httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }),
    };
    
    var data = {
      command: "download",
      roadid: this.roadid,
    };
    
    this.httpClient.post(this.url_main, data, httpOptions).subscribe((data) => {
      console.log(data);
    });
    
    fetch(this.url_main, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          this.downloading = false;
          throw new Error("Network response was not ok");
        }
        this.downloading = true;
        return response.json();
      })
      .then((data) => {
  
        this.downloading = false;
        console.log(data);
      })
      .catch((error) => {
        this.downloading = false;
        console.error("Error:", error);
      });
  }

  startRecording() {
    this.recordedChunks = [];
    this.mediaRecorder.start();
    this.recording = true;
  }

  stopRecording() {
    this.mediaRecorder.stop();
  }

  saveBlobtoDB(blob) {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const datetimeStamp = `${year}${month.toString().padStart(2, "0")}${day
      .toString()
      .padStart(2, "0")}${hours.toString().padStart(2, "0")}${minutes
      .toString()
      .padStart(2, "0")}${seconds.toString().padStart(2, "0")}`;
    console.log(datetimeStamp);

    const filepath =
      "road-inspection/" + this.roadid + `/${datetimeStamp}` + ".mp4";
    //this.progessStage = "Uploading...";
    this.showpercent = "Wait...";

    try {
      const task = this.storage.upload(filepath, blob);
      // observe percentage changes
      this.uploadPercent = task.percentageChanges();

      // get notified when the download URL is available
      task
        .snapshotChanges()
        .pipe(
          finalize(async () => {
            this.showpercent = "Processing...";
            this.downloadURL = await this.storage
              .ref(filepath)
              .getDownloadURL()
              .forEach(async (res) => {
                console.log(res);
                let media_name = String(datetimeStamp);
                media_name = media_name.slice(0, media_name.indexOf("."));
                await this.addSegmentMediaNow(
                  this.roadid,
                  media_name,
                  "vid",
                  res
                );
                this.recording = false;
                this.uploading = false;
              });
          })
        )
        .subscribe();
    } catch (error) {
      // handle the exception
      console.error(error);
      this.recording = false;
      this.uploading = false;
    } finally {
    }
  }

  getValue(val) {
    const roundedNum = Math.round(val);
    this.showpercent = "Uploading..." + roundedNum + "%";
    return roundedNum;
    //console.log("Progress: " + roundedNum);
  }

  async addSegmentMediaNow(roadid, medianame, mediatype, mediaurl) {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const dt = `${year}${month}${day}${hours}${minutes}${seconds}`;
    let segmentMedia: AddSegmentMediaModal = {
      user_id: localStorage.getItem("uuid"),
      road_id: roadid,
      media_name: medianame,
      media_type: mediatype,
      media_url: mediaurl,
      addedondatetime: dt,
      enabled: true,
      approved: true,
    };
    await this.db_m.create(segmentMedia);
  }
}
