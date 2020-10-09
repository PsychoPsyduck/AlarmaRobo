import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { timer } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  showSplash = true;
  alarma = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();


      timer(1000).subscribe(() => this.alarma = true)
      timer(2000).subscribe(() => this.alarma = false)
      timer(3000).subscribe(() => this.alarma = true)
      timer(4000).subscribe(() => this.alarma = false)
      timer(5000).subscribe(() => this.alarma = true)
      timer(6000).subscribe(() => this.showSplash = false)
    });
  }
}
