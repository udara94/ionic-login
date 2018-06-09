import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private fire:AngularFireAuth
 ) {

  }

  logout(){
    this.fire.auth.signOut();
    this.navCtrl.push(LoginPage);
  }	

}
