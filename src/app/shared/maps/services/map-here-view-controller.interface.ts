import {Observable} from "rxjs";

export interface MapHereViewControllerInterface {
  change(view: number): void;
  init(): Observable<any>;
  clear(): void;
}
