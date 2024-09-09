import { Component, OnInit } from "@angular/core";
import { SidebarComponent } from "../../shared/components/sidebar/sidebar.component";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { ChartCardComponent } from "../../shared/components/chart-card/chart-card.component";
import { AnalyticsCardComponent } from "../../shared/components/analytics-card/analytics-card.component";

const FONT_SIZE_LARGE = "1rem";
const FONT_WEIGHT_BOLD = "bold";
const COLOR_PRIMARY = "#374151";
const COLOR_OUT_OF_STOCK = "#E14D2D";
const COLOR_LOW_STOCK = "#1DC0BA";
const COLOR_IN_STOCK = "#0B76B7";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [
    SidebarComponent,
    HeaderComponent,
    ChartCardComponent,
    AnalyticsCardComponent,
  ],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css",
})
export class DashboardComponent implements OnInit {
  barChartOptions = {};
  doughnutChartOptions = {};
  lineChartOptions = {};

  projectTitle = "Total Projects";
  projectValue = "12,450";
  projectPercentage = "15.4%";

  serviceTitle = "Total Services";
  serviceValue = "10,450";
  servicePercentage = "19.9%";

  bookingTitle = "Completed Bookings";
  bookingValue = "9,450";
  bookingPercentage = "6.5%";

  revenueTitle = "Total Revenue";
  revenueValue = "369.95";
  revenuePercentage = "36.5%";

  ngOnInit(): void {
    this.barChartOptions = {
      title: {
        text: "Quote Request",
        left: "left",
        textStyle: {
          fontSize: FONT_SIZE_LARGE,
          fontWeight: FONT_WEIGHT_BOLD,
          color: COLOR_PRIMARY,
        },
      },
      color: ["#3B82F6"],
      tooltip: {
        trigger: "axis",
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisLine: {
          lineStyle: {
            color: "#D1D5DB",
          },
        },
        axisLabel: {
          color: "#6B7280",
        },
      },
      yAxis: {
        type: "value",
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#6B7280",
        },
        splitLine: {
          lineStyle: {
            color: "#E5E7EB",
          },
        },
      },
      series: [
        {
          data: [100, 200, 150, 300, 250, 400, 320, 450, 360, 300, 200, 150],
          type: "bar",
          barWidth: "50%",
        },
      ],
    };

    this.doughnutChartOptions = {
      title: {
        text: "Popular Service",
        left: "left",
        textStyle: {
          fontSize: FONT_SIZE_LARGE,
          fontWeight: FONT_WEIGHT_BOLD,
          color: COLOR_PRIMARY,
        },
      },
      color: ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"],
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "right",
        right: "center",
        top: "center",
        icon: "roundRect",
        textStyle: {
          color: "#6B7280",
        },
      },
      series: [
        {
          name: "Services",
          type: "pie",
          radius: ["50%", "70%"], // Creating the doughnut effect
          avoidLabelOverlap: false,
          label: {
            show: false, // Hide inner labels
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "18",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 48.8, name: "Painting" },
            { value: 24.3, name: "Appliance Fixing" },
            { value: 14.6, name: "Plumbing" },
            { value: 12.3, name: "Cleaning" },
          ],
        },
      ],
    };

    this.lineChartOptions = {
      title: {
        text: "Earning Summary",
        left: "left",
        textStyle: {
          fontSize: FONT_SIZE_LARGE,
          fontWeight: FONT_WEIGHT_BOLD,
          color: COLOR_PRIMARY,
        },
      },
      color: ["#3B82F6"], // Matching the blue color for the line
      tooltip: {
        trigger: "axis",
        formatter: "{b} <br/> Earning: ${c}", // Customize tooltip format
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisLine: {
          lineStyle: {
            color: "#D1D5DB", // Light gray for the x-axis line
          },
        },
        axisLabel: {
          color: "#6B7280", // Gray for the x-axis labels
        },
      },
      yAxis: {
        type: "value",
        axisLine: {
          show: false, // Hide the y-axis line
        },
        axisTick: {
          show: false, // Hide the y-axis ticks
        },
        axisLabel: {
          color: "#6B7280", // Gray for the y-axis labels
        },
        splitLine: {
          lineStyle: {
            color: "#E5E7EB", // Light gray for the grid lines
          },
        },
      },
      series: [
        {
          data: [
            150000, 200000, 180000, 240000, 400000, 350000, 300000, 280000,
            320000, 310000, 290000, 330000,
          ],
          type: "line",
          smooth: true, // Smooth the line
          areaStyle: {
            color: "rgba(59, 130, 246, 0.3)", // Light blue area fill
          },
        },
      ],
    };
  }
}
