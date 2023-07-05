import { Component, OnInit } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from "rxjs/operators";
import { AddVCIModal } from "src/providers";
import { Vci } from "../../../services/db";

@Component({
  selector: "app-vci-processing",
  templateUrl: "./vci-processing.component.html",
  styleUrls: ["./vci-processing.component.scss"],
})
export class VciProcessingComponent implements OnInit {
  public isbusy: boolean = false;
  public showpercent: any = "";
  uploadPercent: any;
  downloadURL: any;
  vci_state: any = "";
  processed: boolean = false;
  _vci: any;

  constructor(private storage: AngularFireStorage, private db: Vci) {}

  ngOnInit(): void {
    this.loadDetails();
  }

  // async uploadFile(event) {
  //   // Get the file input element
  //   const fileInput = document.getElementById("fileInput");

  //   // Get the selected file
  //   const file = event.target.files[0];

  //   // Create a new FormData object
  //   const formData = new FormData();

  //   // Append the file to the FormData object
  //   formData.append("file", file);

  //   // Send the file to the server using an AJAX request
  //   const xhr = new XMLHttpRequest();
  //   xhr.open("POST", "http://localhost:9000/vci");
  //   xhr.onreadystatechange = () => {
  //     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
  //       // Create a new blob object from the response data
  //       const blob = new Blob([xhr.response], {
  //         type: "application/vnd.ms-excel",
  //       });

  //       // Create a URL for the blob
  //       const url = window.URL.createObjectURL(blob);

  //       // Create a link element and click it to download the file
  //       const link = document.createElement("a");
  //       link.href = url;
  //       link.download = "updated_file.xlsx";
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);
  //     }
  //   };
  //   xhr.responseType = "arraybuffer";
  //   xhr.send(formData);
  // }

  downloadFile(url) {
    window.open(url, "_blank");
  }

  foundVCIState(state: string) {
    if (state == "") {
      this.vci_state = false;
    } else {
      this.vci_state = true;
    }
  }

  public getdate(dt: string) {
    let _dt =
      dt.substring(0, 4) +
      "-" +
      dt.substring(4, 6) +
      "-" +
      dt.substring(6, 8) +
      " " +
      dt.substring(8, 10) +
      ":" +
      dt.substring(10, 12) +
      ":" +
      dt.substring(12, 14);
    return _dt;
  }

  loadDetails() {
    this.db.Vci.subscribe((val) => {
      console.log(val[0]);
      this._vci = val;
      //this.processed = this._vci["processed"];
    });
    this.db.getAll();
  }

  update_vci(event) {
    const file = event.target.files[0];
    const filepath = "road-inspection/vci" + `/${file.name}`;
    this.isbusy = true;
    //this.progessStage = "Uploading...";
    this.showpercent = "Wait...";

    try {
      const task = this.storage.upload(filepath, file);
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
                await this.updateVCI(res);
                this.isbusy = false;
              });
          })
        )
        .subscribe();
    } catch (error) {
      // handle the exception
      console.error(error);
      this.isbusy = false;
    } finally {
    }
  }
  async updateVCI(file_url) {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const dt = `${year}${month}${day}${hours}${minutes}${seconds}`;
    let vciData: AddVCIModal = {
      file_url: file_url,
      processed: false,
      processed_date: dt,
      state: "",
    };
    await this.db.update("jJpNhkK1klhQm6ZUgP9M", vciData);
    this.showpercent = "";
  }

  getValue(val) {
    const roundedNum = Math.round(val);
    this.showpercent = "Uploading..." + roundedNum + "%";
    return roundedNum;
    //console.log("Progress: " + roundedNum);
  }
}
