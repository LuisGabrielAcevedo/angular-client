import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Screen1Component } from "./components/screen1/screen1.component";
import { Screen2Component } from "./components/screen2/screen2.component";
import { Screen3Component } from "./components/screen3/screen3.component";
import { Screen4Component } from "./components/screen4/screen4.component";
import { Screen5Component } from "./components/screen5/screen5.component";
import { Screen6Component } from "./components/screen6/screen6.component";
import { Screen7Component } from "./components/screen7/screen7.component";
import { Screen8Component } from "./components/screen8/screen8.component";
import { Screen9Component } from "./components/screen9/screen9.component";
import { Screen10Component } from "./components/screen10/screen10.component";
import { Screen11Component } from "./components/screen11/screen11.component";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { StartRatingComponent } from "./components/start-rating/start-rating.component";
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    Screen1Component,
    Screen2Component,
    Screen3Component,
    Screen4Component,
    Screen5Component,
    Screen6Component,
    Screen7Component,
    Screen8Component,
    Screen9Component,
    Screen10Component,
    Screen11Component,
    StartRatingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
