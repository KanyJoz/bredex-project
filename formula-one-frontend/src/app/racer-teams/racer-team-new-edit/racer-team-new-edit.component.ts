import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

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
        console.log(this.racerTeamForm);
    }

    getSubmitButtonLabel(): string {
        return this.inEditMode ? 'Update Racer Team' : 'Create Racer Team';
    }
}
