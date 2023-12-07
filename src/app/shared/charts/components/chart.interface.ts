export interface ChartInterface {
  show: boolean;
  exportEnabled: boolean;
  title: {
    text: string
  },
  data: Array<{
    type: "line";
    dataPoints: Array<{ x: number, y: number }>
  }>
}
