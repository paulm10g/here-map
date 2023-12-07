import {PointsInterface} from "../points.interface";

export interface MapHereViewDataPointsInterface extends PointsInterface {
  x: any;
  y: number;
}

export interface MapHereViewDataInterface {
  id: number;
  name: string;
  leg_duration: number;
  points: Array<MapHereViewDataPointsInterface>;
}
