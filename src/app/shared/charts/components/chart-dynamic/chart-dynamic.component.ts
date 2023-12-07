import {Component, Input, OnDestroy} from '@angular/core';
import {ChartInterface} from "../chart.interface";

@Component({
  selector: 'app-chart-dynamic',
  templateUrl: './chart-dynamic.component.html',
  styleUrl: './chart-dynamic.component.scss'
})
export class ChartDynamicComponent implements OnDestroy {
  dps: Array<{x: number, y: number}> = [];
  chart: any;
  private _chartOptions: ChartInterface = {
    show: false
  } as ChartInterface;
  private _timeOut?: NodeJS.Timeout;

  @Input() set chartOptions(o: ChartInterface) {
    this._chartOptions = o;
    this.dps = this._chartOptions?.data?.[0]?.dataPoints ?? [];
    if (!o.show) {
      this.stopTimeout();
    }
  };

  get chartOptions(): ChartInterface {
    return this._chartOptions;
  }

  setChartInstance(chart: object) {
    this.chart = chart;
    this._timeOut = setTimeout(this.updateChart, 1000); //Chart updated every 1 second
  }

  updateChart = () => {
    var yVal = this.dps?.[this.dps.length - 1]?.y + Math.round(5 + Math.random() * (-5 - 5));
    this.dps?.push({x: this.dps?.[this.dps.length - 1]?.x + 1, y: yVal});

    if (this.dps?.length > 10) {
      this.dps?.shift();
    }
    this.chart.render();
    this._timeOut = setTimeout(this.updateChart, 1000); //Chart updated every 1 second
  }

  ngOnDestroy() {
    this.stopTimeout();
  }

  stopTimeout() {
    if (this._timeOut) {
      clearTimeout(this._timeOut);
    }
  }
}
