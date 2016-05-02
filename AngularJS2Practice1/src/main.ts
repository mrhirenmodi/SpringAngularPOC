//main entry point
import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {AppComponent} from './app';
import {ROUTER_PROVIDERS, HashLocationStrategy} from 'angular2/router';
import {LocationStrategy} from 'angular2/platform/common';

bootstrap(AppComponent, [ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}])
  .catch(err => console.error(err));