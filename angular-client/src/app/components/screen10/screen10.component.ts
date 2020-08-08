import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-screen10",
  templateUrl: "./screen10.component.html",
  styleUrls: ["./screen10.component.css"]
})
export class Screen10Component implements OnInit {
  defaultImage = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50";
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
