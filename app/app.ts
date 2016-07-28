import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {TRANSLATE_PROVIDERS,TranslatePipe, TranslateService, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {Http,HTTP_PROVIDERS} from '@angular/http';

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

    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
    this.translateConfig();
  }

  translateConfig() {
    var userLang = navigator.language.split('-')[0];
    userLang = /(en|de)/gi.test(userLang) ? userLang : 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(userLang);
  }

}

ionicBootstrap(MyApp,[HTTP_PROVIDERS, TRANSLATE_PROVIDERS]);
