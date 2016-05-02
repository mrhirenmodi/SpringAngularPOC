//our root app component
import {Component, Directive, Output, EventEmitter, Input, SimpleChange} from 'angular2/core'
import {ROUTER_DIRECTIVES, Router, RouteConfig} from 'angular2/router';
import {FORM_DIRECTIVES} from 'angular2/common';
import { FormComponent } from './components/form';


@Component({
    selector: 'my-app',
    directives: [FormComponent]
    template: `
    <h1>Hello Angular2</h1>
    <form-example></form-example>
    `
})
export class AppComponent {
}
