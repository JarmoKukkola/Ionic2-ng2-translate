import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TranslatePipe} from 'ng2-translate/ng2-translate';

@Component({
  templateUrl: 'build/pages/about/about.html',
  pipes: [TranslatePipe]
})
export class AboutPage {
  constructor(private navCtrl: NavController) {
  }
}
