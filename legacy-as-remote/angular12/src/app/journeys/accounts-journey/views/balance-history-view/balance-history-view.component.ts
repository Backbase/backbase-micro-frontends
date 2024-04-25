import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { TooltipService } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-balance-history-view',
  templateUrl: './balance-history-view.component.html',
})
export class BalanceHistoryViewComponent implements AfterViewInit {
  showChartLegend = true;
  size = 10;
  @ViewChild('tooltip', { read: ViewContainerRef }) tooltip!: ViewContainerRef;

  constructor(private tooltipService: TooltipService) {}

  ngAfterViewInit(): void {
    this.tooltipService.injectionService.setRootViewContainer(this.tooltip);
  }
}
