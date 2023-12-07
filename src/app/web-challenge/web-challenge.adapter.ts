import {HttpClient} from "@angular/common/http";
import {FileAdapterInterface} from "../shared/files/file-adapter.interface";
import {MapHereViewDataInterface, MapHereViewDataPointsInterface} from "../shared/maps/services/map-here-view-data.interface";
import {map, Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class WebChallengeAdapter implements FileAdapterInterface<Observable<Array<MapHereViewDataInterface>>> {

  constructor(private http: HttpClient) {
  }

  download(url: string): Observable<Array<MapHereViewDataInterface>> {
    return this.http.get(url, {responseType: 'json'})
      .pipe(
        map(((c: any) => {
          return c.map((_c: any) => {
            let points: Array<MapHereViewDataPointsInterface> = [];
            JSON.parse(_c.points).forEach((p: any) => {
              points.push({
                lng: p[0],
                lat: p[1],
                x: p[2] / 36000,
                y: p[3]
              });
            });
            return {
              id: _c.route_id,
              name: _c.from_port + ' ' + _c.to_port,
              leg_duration: _c.leg_duration,
              points: points
            }
          });
        }))
      );
  }

}
