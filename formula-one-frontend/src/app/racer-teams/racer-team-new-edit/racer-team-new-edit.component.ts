import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-racer-team-new-edit',
  templateUrl: './racer-team-new-edit.component.html',
  styleUrls: ['./racer-team-new-edit.component.scss']
})
export class RacerTeamNewEditComponent {
    @ViewChild('f') racerTeamForm!: NgForm;

    onSubmit(): void {
        console.log(this.racerTeamForm);
    }
}
