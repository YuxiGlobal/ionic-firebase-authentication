import { Component } from '@angular/core';

import { Plugins } from '@capacitor/core';
const { StatusBar, SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    SplashScreen.hide().catch(error => {
      console.warn(error);
    });
    StatusBar.hide().catch(error => {
      console.warn(error);
    });
  }
}
