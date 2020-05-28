import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-screen8",
  templateUrl: "./screen8.component.html",
  styleUrls: ["./screen8.component.css"],
})
export class Screen8Component implements OnInit {
  defaultImage = "../../../assets/images/default.png";
  fileSelected: any = null;
  fileToUpload: any = null;
  constructor() {}

  ngOnInit() {}

  fileChangeEvent(imagen) {
    if (!imagen) {
      this.fileSelected = null;
      return;
    }
    this.fileToUpload = imagen.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);
    reader.onloadend = () => {
      this.fileSelected = reader.result;
    };
  }
}
