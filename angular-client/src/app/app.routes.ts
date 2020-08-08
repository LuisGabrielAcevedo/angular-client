import { Routes } from "@angular/router";
import { Screen1Component } from "./components/screen1/screen1.component";
import { Screen2Component } from "./components/screen2/screen2.component";
import { Screen3Component } from "./components/screen3/screen3.component";
import { Screen4Component } from "./components/screen4/screen4.component";
import { Screen6Component } from "./components/screen6/screen6.component";
import { Screen5Component } from "./components/screen5/screen5.component";
import { Screen7Component } from "./components/screen7/screen7.component";
import { Screen8Component } from "./components/screen8/screen8.component";
import { Screen9Component } from "./components/screen9/screen9.component";
import { Screen10Component } from "./components/screen10/screen10.component";
import { Screen11Component } from "./components/screen11/screen11.component";
import { Screen12Component } from "./components/screen12/screen12.component";
export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "screen1",
  },
  {
    path: "screen1",
    component: Screen1Component,
  },
  {
    path: "screen2",
    component: Screen2Component,
  },
  {
    path: "screen3",
    component: Screen3Component,
  },
  {
    path: "screen4",
    component: Screen4Component,
  },
  {
    path: "screen5",
    component: Screen5Component,
  },
  {
    path: "screen6",
    component: Screen6Component,
  },
  {
    path: "screen7",
    component: Screen7Component,
  },
  {
    path: "screen8",
    component: Screen8Component,
  },
  {
    path: "screen9",
    component: Screen9Component,
  },
  {
    path: "screen10",
    component: Screen10Component,
  },
  {
    path: "screen11",
    component: Screen11Component,
  },
  {
    path: "screen12",
    component: Screen12Component,
  },
];
