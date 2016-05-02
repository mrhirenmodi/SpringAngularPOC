import {Component, Input} from 'angular2/core';

@Component({
    selector: 'child-property-data-binding',
    template: `
    <h2>'Child IN <=' {{ childInput }}<h2>
    `,
    inputs: ['childInput']
})

export class ChildPropertyDataBindingComponent {
    //To reverse to @Input below comment inputs: section above
    //@Input('childInput') childInput = ''; 

    constructor() {
    // Do stuff
  }
}
