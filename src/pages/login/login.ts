import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {HomePage} from '../home/home';
import {SignupPage} from '../signup/signup';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginData={
    email:'',
    password:''
  }

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,  
    private toastCtrl:ToastController,
    private afAuth:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    
    this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email,this.loginData.password)
    .then(auth =>{

       this.navCtrl.setRoot(HomePage);
    })
    
    .catch(err =>{

      let toast =this.toastCtrl.create({
        message:err.message,
        duration:1000
      });
      toast.present();

    });

  }

  Register(){
    this.navCtrl.push(SignupPage)
  }

}
