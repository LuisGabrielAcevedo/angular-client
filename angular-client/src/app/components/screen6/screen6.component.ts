import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-screen6",
  templateUrl: "./screen6.component.html",
  styleUrls: ["./screen6.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class Screen6Component implements OnInit {
  dialog = false;
  dialog2 = false;
  constructor() {}

  ngOnInit() {}

  toggle() {
    this.dialog = !this.dialog;
  }

  toggle2() {
    this.dialog2 = !this.dialog2;
  }
}
