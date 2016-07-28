import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {TabsPage} from './pages/tabs/tabs';
import {TranslateService, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {Http} from '@angular/http';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [
    {
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
      deps: [Http]
    },
    TranslateService,
  ]
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform,
    public translate: TranslateService) {
    this.rootPage = TabsPage;
    this.translateConfig();
  }

  translateConfig() {
    var userLang = navigator.language.split('-')[0];
    userLang = /(en|de)/gi.test(userLang) ? userLang : 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(userLang);
  }
}

ionicBootstrap(MyApp);
