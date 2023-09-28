import {Injectable} from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class FilesUploadService {

  constructor(private angularFireStorage: AngularFireStorage) {
  }

  uploadFile(file: any) {
    const filePath = `images/${file.name}`;
    const fileRef = this.angularFireStorage.ref(filePath);
    console.log(fileRef);
    const task = this.angularFireStorage.upload(filePath, file);
    return {
      task,
      fileRef
    }
  }

  getDownloadURL() {
    // return this.angularFireStorage.ref('images').getDownloadURL().subscribe((url) => {
    //   console.log(url);
    // })
  }
}
