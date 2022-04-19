import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacerTeamsComponent } from './racer-teams.component';

describe('RacerTeamsComponent', () => {
  let component: RacerTeamsComponent;
  let fixture: ComponentFixture<RacerTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacerTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacerTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
