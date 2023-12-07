import {Component, AfterViewInit} from '@angular/core';
import H from '@here/maps-api-for-javascript';
import {ElementRef, ViewChild, Input} from '@angular/core';
import {MapHereViewDataPointsInterface} from "../../services/map-here-view-data.interface";

@Component({
  selector: 'app-map-here',
  templateUrl: './map-here.component.html',
  styleUrl: './map-here.component.scss'
})
export class MapHereComponent implements AfterViewInit {
  private map?: H.Map;
  private _points?: Array<MapHereViewDataPointsInterface>;
  // todo replace points with H.map.Polyline objects
  @Input() set points(_points: Array<MapHereViewDataPointsInterface>) {
    this._points = _points;
    if (this.map && this.mapDiv) {
      this.setPolyFils(_points);
    }
  }

  @ViewChild('map') mapDiv?: ElementRef;

  ngAfterViewInit() {
    if (!this.map && this.mapDiv) {
      // Instantiate a platform, default layers and a map as usual.
      const platform = new H.service.Platform({
        apikey: '{YOUR_API_KEY}'
      });
      const layers = platform.createDefaultLayers();
      const map = new H.Map(
        this.mapDiv.nativeElement,
        // Add type assertion to the layers object...
        // ...to avoid any Type errors during compilation.
        (layers as any).vector.normal.map,
        {
          pixelRatio: window.devicePixelRatio,
          center: {lat: 0, lng: 0},
          zoom: 2,
        },
      );
      this.map = map;
      // add a resize listener to make sure that the map occupies the whole container
      window.addEventListener('resize', () => this.map?.getViewPort().resize());
      //Step 3: make the map interactive
      // MapEvents enables the event system
      // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

      // Create the default UI components
      const ui = H.ui.UI.createDefault(map, layers);
      if (this._points) {
        this.setPolyFils(this._points);
      }
    }
  }

  setPolyFils(points: Array<MapHereViewDataPointsInterface>): void {
    this.map?.removeObjects(this.map?.getObjects(true) as H.map.Object [])
    if (points?.length) {
      const begin = points.findIndex(v => v.y > 15);
      const end = points.reverse().findIndex(v => v.y > 15)
      const lineString = new H.geo.LineString();
      const middleLineString = new H.geo.LineString();
      const endLineString = new H.geo.LineString();
      if(begin && end) {
        points.slice(0, begin).forEach(geo => {
          lineString.pushPoint(geo);
        });
        points.slice(begin, points.length - 1 -end).forEach(geo => {
          middleLineString.pushPoint(geo);
        });
        points.slice(points.length - 1 - end, points.length - 1).forEach(geo => {
          endLineString.pushPoint(geo);
        });
        const object = new H.map.Polyline(
          lineString, {style: {lineWidth: 4, strokeColor: 'red' }, data: null},
        );
        const object2 = new H.map.Polyline(
          middleLineString, {style: {lineWidth: 4, strokeColor: 'green' }, data: null},
        );
        const object3 = new H.map.Polyline(
          endLineString, {style: {lineWidth: 4, strokeColor: 'red' }, data: null},
        );
        this.map?.addObject(object);
        this.map?.addObject(object2);
        this.map?.addObject(object3);
      } else {
        points.forEach(geo => {
          lineString.pushPoint(geo);
        });
        const object = new H.map.Polyline(
          lineString, {style: {lineWidth: 4, strokeColor: 'green' }, data: null},
        );
        this.map?.addObject(object);
      }

      this.map?.getViewModel().setLookAtData({
        position: points[0]
      });
    }
  }
}
