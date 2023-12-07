import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebChallengeComponent } from './web-challenge.component';

describe('WebChallengeComponent', () => {
  let component: WebChallengeComponent;
  let fixture: ComponentFixture<WebChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebChallengeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
