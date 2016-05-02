import {Component} from 'angular2/core';
import {NgFormModel} from 'angular2/common';
import {FormsValidationService} from './../services/validation';

@Component({
    selector: 'error-messages',
    inputs: ['controlName: control'],
    template: `<span class="error" *ngIf="errorMessage !== null">{{errorMessage}}</span>`
})
export class ErrorMessages {
    controlName: string;
    constructor(private _formDir: NgFormModel) { }

    get errorMessage() {
        // Find the control in the Host (Parent) form
        let c = this._formDir.form.find(this.controlName);

        for (let propertyName in c.errors) {
	        // If control has a error
            if (c.errors.hasOwnProperty(propertyName) && c.touched) {
 		        // Return the appropriate error message from the Validation Service
                return FormsValidationService.getValidatorErrorMessage(propertyName);
            }
        }

        return null;
    }
}