import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: 'AIzaSyCmy35UeH4OOQSLZiMo5-qcuUh5mduTeu4',
      authDomain: 'ng4-recipe-app-21a94.firebaseapp.com'
    });

  }
  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  //   console.log(feature);
  // }
}
