import {InjectionToken} from "@angular/core";
import {MapHereViewControllerInterface} from "./map-here-view-controller.interface";
import {MapHereViewModelInterface} from "./map-here-view-model.interface";

export const MapHereViewController = new InjectionToken<MapHereViewControllerInterface>('MapHereViewControllerInterface');
export const MapHereViewModel = new InjectionToken<MapHereViewModelInterface>('MapHereViewModelInterface');
