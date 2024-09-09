import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { NgxEchartsDirective, provideEcharts } from "ngx-echarts";

@Component({
  selector: "app-chart-card",
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: "./chart-card.component.html",
  styleUrl: "./chart-card.component.css",
  providers: [provideEcharts()],
})
export class ChartCardComponent {
  @Input() options = {};
}
