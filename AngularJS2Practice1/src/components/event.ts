import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'child-event-data-binding',
    template: `
    <h2>'Child OUT =>' <input type="text" (keyup)='onDataChanged(data.value)' #data/><h2>
    `,
    //outputs: ['dataChanged']
})

export class ChildEventDataBindingComponent {
    //To reverse to outputs below comment Output: section below
    @Output('dataChanged') dataChanged = '';
    dataChanged = new EventEmitter<string>();

    onDataChanged(data: string) {
        this.dataChanged.emit(data);
    }

    constructor() { 
    // Do stuff
  }
}
