import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { RacerTeam } from './../racer-team.model';

@Component({
  selector: 'app-racer-team-new-edit',
  templateUrl: './racer-team-new-edit.component.html',
  styleUrls: ['./racer-team-new-edit.component.scss']
})
export class RacerTeamNewEditComponent implements OnInit {
    @ViewChild('f') racerTeamForm!: NgForm;
    inEditMode: boolean = false;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            if ('id' in params) {
                this.inEditMode = true;
            }
        });
    }

    onSubmit(): void {
        if (!this.inEditMode) {
            const newRacerTeamFormData = {
                id: Math.random(),
                name: this.racerTeamForm.value.name,
                year: this.racerTeamForm.value.year,
                cups: this.racerTeamForm.value.cups,
                payed: this.racerTeamForm.value.payed,
            };
            console.log(newRacerTeamFormData);
        } else {
            console.log('TODO edit part');
        }
    }

    getSubmitButtonLabel(): string {
        return this.inEditMode ? 'Update Racer Team' : 'Create Racer Team';
    }
}
