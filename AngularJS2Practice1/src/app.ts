//our root app component
import { Component, Output, EventEmitter, Input} from 'angular2/core'
import { ChildPropertyDataBindingComponent } from './components/property';
import { ChildEventDataBindingComponent } from './components/event';

@Component({
    selector: 'my-app',
    directives: [ChildPropertyDataBindingComponent, ChildEventDataBindingComponent],
    template: `
    <h1>'Parent' component</h1>
    <p>
      IN <= {{ fromChild }}
    </p>
    <p>
       OUT => <input type="text" [(ngModel)]='parentInput'/>
    </p>
    <hr />
    <p>
        <child-property-data-binding [childInput]='parentInput'></child-property-data-binding>
    </p>
    <p>
        <child-event-data-binding (dataChanged)='fromChild = $event'></child-event-data-binding>
    </p>
    `
})
export class AppComponent {
}
