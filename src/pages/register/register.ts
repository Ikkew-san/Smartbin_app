import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthenProvider } from '../../providers/authen/authen';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public authenProvider: AuthenProvider) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad RegisterPage');
  // }

  
  onSubmit(myform: NgForm) {
    let params = {
      name: myform.value.name,
      username: myform.value.username,
      password: myform.value.password,
      email: myform.value.email,
      position: '2'
    }
    console.log(params)
    this.authenProvider.setRegister(params).subscribe(res => {
      console.log(res)
      this.navCtrl.setRoot(LoginPage)
    },err => console.log(err))
  }
}
