import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { multi } from "./data";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  multi: any[];
  view: any[] = [1300, 300];

  // options
  // showXAxis: boolean = true;
  showXAxis: boolean = false;
  showYAxis: boolean = true;
  gradient: boolean = false;
  // showLegend: boolean = true;
  showLegend: boolean = false;
  showDataLabel: boolean = true;
  // legendPosition: string = "below";
  legendPosition: string = "right";
  showXAxisLabel: boolean = true;
  yAxisLabel: string = "Grouped Horizontal Bar Chart";
  roundDomains: boolean = true;
  disableTooltip: boolean = true;
  showGridLines: boolean = true;
  showYAxisLabel: boolean = true;
  xAxisLabel = "Population";

  colorScheme = {
    // domain: ['#00275e', '#007bff']
    // domain: ['#943126', '#C70039', '#148F77', '#007bFF']
    // domain: ['#F1C40F', '#943126', '#C70039', '#148F77']
    domain: ['#148F77', '#943126', '#F1C40F']
  };
  // schemeType: string = "linear";
  schemeType: string = "ordinal";

  constructor() {
    Object.assign(this, { multi });
  }

  onSelect(data): void {
    console.log("Item clicked", JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log("Activate", JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log("Deactivate", JSON.parse(JSON.stringify(data)));
  }
}
