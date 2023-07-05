import { Injectable } from "@angular/core";
import * as RecordRTC from "recordrtc";
import * as hlsjs from "hls.js";
import flvjs from "flv.js";

@Injectable({
  providedIn: "root",
})
export class StreamRecorderService {
  private mediaRecorder: RecordRTC;
  private stream: MediaStream;

  constructor() {}

  public async startRecording(url: string): Promise<void> {
    const video = document.createElement("video");
    video.muted = true;
    video.controls = false;
    video.autoplay = true;
    video.src = url;
    document.body.appendChild(video);

    const player = flvjs.createPlayer({
      type: "flv",
      url: url,
    });
    player.attachMediaElement(video);
    player.load();
    player.play();

    this.stream = (video as any).captureStream() as MediaStream; // cast to any to access captureStream() method
    const options: MediaRecorderOptions = {
      mimeType: "video/mp4",
    };
    this.mediaRecorder = new RecordRTC(this.stream, options);
    this.mediaRecorder.startRecording();
  }

  public stopRecording(): Promise<Blob> {
    return new Promise<Blob>((resolve, reject) => {
      this.mediaRecorder.stopRecording(
        () => {
          const blob = this.mediaRecorder.getBlob();
          resolve(blob);
        },
        () => {
          reject();
        }
      );
      this.stream.getTracks().forEach((track) => track.stop());
    });
  }
}
