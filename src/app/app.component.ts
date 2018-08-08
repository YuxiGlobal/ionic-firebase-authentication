import { Component } from '@angular/core';

import { Plugins } from '@capacitor/core';
import { firebaseConfig } from './config/credentials';
import * as firebase from 'firebase/app';
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
    firebase.initializeApp(firebaseConfig);
    SplashScreen.hide().catch(error => {
      console.warn(error);
    });
    StatusBar.hide().catch(error => {
      console.warn(error);
    });
  }
}
