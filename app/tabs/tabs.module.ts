import * as angular from 'angular';
import {tabComponentDesc} from "./tabs.component";
import {tabsComponentDesc} from "./tabs.component";

const tabs = angular.module('tabs', []);

tabs.component('tab', tabComponentDesc);
tabs.component('tabs', tabsComponentDesc);

export default (tabs.name);