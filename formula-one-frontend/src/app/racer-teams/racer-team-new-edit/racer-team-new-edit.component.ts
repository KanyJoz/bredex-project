import { Store } from '@ngrx/store';
import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { AppState } from './../../store/app.reducer';
import * as RacerTeamsActions from '../store/racer-teams.actions';
import { RacerTeam } from './../racer-team.model';

@Component({
  selector: 'app-racer-team-new-edit',
  templateUrl: './racer-team-new-edit.component.html',
  styleUrls: ['./racer-team-new-edit.component.scss']
})
export class RacerTeamNewEditComponent implements OnInit {
    @ViewChild('f') racerTeamForm!: NgForm;
    inEditMode: boolean = false;
    racerTeam: RacerTeam = null;
    racerTeamLoading: boolean = false;
    racerTeamError: string = '';

    constructor(
        private route: ActivatedRoute,
        private store: Store<AppState>
    ) {
        this.route.params.subscribe((params: Params) => {
            if ('id' in params) {
                this.inEditMode = true;
                this.store.dispatch(new RacerTeamsActions.GetRacerTeam(params['id']));
            }
        });
    }

    ngOnInit(): void {
        this.store
        .select('racerTeams').pipe(
        ).subscribe(racerTeamsSlice => {
            this.racerTeam = racerTeamsSlice.racerTeam;
            this.racerTeamLoading = racerTeamsSlice.racerTeamLoading;
            this.racerTeamError = racerTeamsSlice.racerTeamError;
        });
    }

    onSubmit(): void {
        if (!this.inEditMode) {
            const newRacerTeamFormData = {
                name: this.racerTeamForm.value.name,
                yearOfFoundation: this.racerTeamForm.value.year,
                wonWorldCups: this.racerTeamForm.value.cups,
                haveAlreadyPayed: this.racerTeamForm.value.payed,
            };
            this.store.dispatch(new RacerTeamsActions.StartAddRacerTeam(newRacerTeamFormData));
        } else {
            console.log('TODO edit part');
        }
    }

    getSubmitButtonLabel(): string {
        return this.inEditMode ? 'Update Racer Team' : 'Create Racer Team';
    }
}
