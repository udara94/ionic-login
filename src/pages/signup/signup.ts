import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController} from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {LoginPage} from '../login/login';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupData ={
    email:'',
    password:'',
    passwordRetyped:'',
  };

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,  
    private alertCtrl: AlertController,
    private afAuth: AngularFireAuth,
  public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signup(){
    if(this.signupData.password !==this.signupData.passwordRetyped){
    let alert =this.alertCtrl.create({
      title:'Error',
      message:'Password and Re-entered password does not match ',
      buttons:['OK']
    });
    alert.present();
    return;
  }
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });
  loading.present();
 
  loading.dismiss();
  
  this.afAuth.auth.createUserWithEmailAndPassword(this.signupData.email,this.signupData.password)
  .then( newUser => {
    console.log("newUser"+newUser)
    })

.then(auth=>{
 
  console.log(auth);
  this.Alertsuccessfull();

  })
  .catch(err =>{
	console.log("error in registering");

  });

}

Alertsuccessfull() {
  let alertmsg = this.alertCtrl.create({
    title: 'Successful',
    message: 'You successfully registerd',
    buttons: ['Ok']
  });
  alertmsg.present(alertmsg);
}

}
