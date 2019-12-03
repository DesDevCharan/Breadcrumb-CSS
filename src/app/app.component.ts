import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name = "Angular";
  routesList = [
    {
      name: "Welcome",
      active: true
    },
    {
      name: "MVISION LOGIN",
      active: false
    },
    {
      name: "Product Selection",
      active: false
    },
    {
      name: "Progress",
      active: false
    },
    {
      name: "Deploy",
      active: false
    }
  ];
}
