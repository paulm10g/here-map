import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapHereViewComponent } from './map-here-view.component';

describe('MapHereViewComponent', () => {
  let component: MapHereViewComponent;
  let fixture: ComponentFixture<MapHereViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapHereViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapHereViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
