import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapHereComponent } from './map-here.component';

describe('MapHereComponent', () => {
  let component: MapHereComponent;
  let fixture: ComponentFixture<MapHereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapHereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
