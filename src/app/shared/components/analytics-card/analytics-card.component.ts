import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-analytics-card',
  standalone: true,
  imports: [],
  templateUrl: './analytics-card.component.html',
  styleUrls: ['./analytics-card.component.css'],
})
export class AnalyticsCardComponent implements OnChanges {
  @Input() icon = '';
  @Input() title = '';
  @Input() value = '';
  @Input() percentage = '';
  @Input() isDecreased = false;

  trend = '';
  trendStyle = '';

  ngOnChanges() {
    this.trend = this.isDecreased
      ? 'assets/images/trend-down.svg'
      : 'assets/images/trend-up.svg';
    this.trendStyle = this.isDecreased
      ? 'bg-[#FEECEF] text-[#F54F6C] '
      : 'bg-[#E7F8F6] text-[#2BBFAE] ';
  }
}
