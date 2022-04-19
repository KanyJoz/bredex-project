import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacerTeamNewEditComponent } from './racer-team-new-edit.component';

describe('RacerTeamNewEditComponent', () => {
  let component: RacerTeamNewEditComponent;
  let fixture: ComponentFixture<RacerTeamNewEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacerTeamNewEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacerTeamNewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
