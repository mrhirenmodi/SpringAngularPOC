import {Component, OnInit} from "angular2/core";
import {FormBuilder, ControlGroup, Validators} from "angular2/common";
import {ErrorMessages} from './errorMessages';
import {FormsValidationService} from './../services/validation';

@Component({
    selector: 'form-example',
    directives: [ErrorMessages],
    template: `
        <h2>FormBuilder and Validation</h2>
        <form [ngFormModel]="dataFormModel" (ngSubmit)="onSubmit()">
            <div>
                <label class="column" for="email">Email</label>
                <input [ngFormControl]="dataFormModel.controls['email']" type="text" #email="ngForm">
                <error-messages control="email"></error-messages>
            </div>
            <div>
                <label for="password">Password</label>
                <input [ngFormControl]="dataFormModel.controls['password']" type="text" #password="ngForm">
                <error-messages control="password"></error-messages>
            </div>
            <button type="submit" [disabled]="!dataFormModel.valid">Login</button>
        </form>
    `
})
export class FormComponent implements OnInit {
    dataFormModel: ControlGroup;

    constructor(private _formBuilder: FormBuilder) {}

    onSubmit(form) {
        alert(JSON.stringify(this.dataFormModel.value));
    }

    ngOnInit() {
        this.dataFormModel = this._formBuilder.group({
            'email': ['', Validators.compose([
                Validators.required,
                FormsValidationService.emailValidator
            ])],
            'password': ['', Validators.required],
        });
    }
}