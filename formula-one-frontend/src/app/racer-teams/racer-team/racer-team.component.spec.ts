import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacerTeamComponent } from './racer-team.component';

describe('RacerTeamComponent', () => {
  let component: RacerTeamComponent;
  let fixture: ComponentFixture<RacerTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacerTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacerTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
