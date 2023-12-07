import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MapsModule} from '../../shared/maps/maps.module'
import {WebChallengeController} from "../web-challenge.controller";
import {MapHereViewController, MapHereViewModel} from "../../shared/maps/services/tokens";
import {WebChallengeModel} from "../web-challenge.model";
@Component({
  selector: 'app-web-challenge',
  standalone: true,
  imports: [RouterLink, MapsModule],
  templateUrl: './web-challenge.component.html',
  styleUrl: './web-challenge.component.scss',
  providers: [
    {provide: MapHereViewController, useExisting: WebChallengeController},
    {provide: MapHereViewModel, useExisting: WebChallengeModel}
  ]
})
export class WebChallengeComponent implements OnInit {


  constructor() {
  }
  ngOnInit() {


  }
}
