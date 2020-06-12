import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PeopleListComponent extends Component {
  @action
  openInAppBrowser () {
    window.cordova.InAppBrowser.open('www.google.com', '_blank');
  }
}