import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthenProvider } from '../../providers/authen/authen';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public authenProvider: AuthenProvider,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  gotoregister(){
    this.navCtrl.push(RegisterPage);
  }

  onSubmit(myform: NgForm) {
    let params = {
      username: myform.value.username,
      password: myform.value.password,
      position: '2'
    }
    this.authenProvider.getAuthen(params).subscribe(res => {
      if (res['length'] != 0) 
      {
        let logged_user = JSON.stringify(res[0]);
        console.log(logged_user)
        localStorage.setItem('logged_user', logged_user)
        localStorage.setItem('isLoggedin', 'true')
        this.navCtrl.setRoot(TabsPage)
      } 
      else 
      {
        let alert = this.alertCtrl.create({
          title: 'Login failed!',
          subTitle: 'Username or password incorrect.',
          buttons: ['OK']
        });
        alert.present();
      }
    }, err => console.log(err))
  }
}
