import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacerTeamsListComponent } from './racer-teams-list.component';

describe('RacerTeamsListComponent', () => {
  let component: RacerTeamsListComponent;
  let fixture: ComponentFixture<RacerTeamsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacerTeamsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacerTeamsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
