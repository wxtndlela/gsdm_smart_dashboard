import { Injectable } from "@angular/core";
import * as uuid from "uuid";
// Import the functions you need from the SDKs you need
import { AngularFireStorage } from "@angular/fire/storage";

@Injectable({
  providedIn: "root",
})
export class FirebaseStorage {
  _url: any;

  constructor(private storage: AngularFireStorage) {}

  async pushFileToStorage(path, file) {
    const filePath = `/${path}/${uuid.v4()}`;
    const storageRef = this.storage.ref(filePath);
    return (await storageRef.putString(file, "data_url")).ref;
  }

  deleteFile(key, name, basePath): void {}

  private deleteFileStorage(name, basePath): void {
    const storageRef = this.storage.ref(basePath);
    storageRef.child(name).delete();
  }
}
