import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { PromotionPage } from '../pages/promotion/promotion';
import { RewardPage } from '../pages/reward/reward';
import { RewardlistPage } from '../pages/rewardlist/rewardlist';
import { SettingPage } from '../pages/setting/setting';
import { RegisterPage } from '../pages/register/register';
import { AuthenProvider } from '../providers/authen/authen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PromotionPage,
    RewardPage,
    RewardlistPage,
    SettingPage,
    LoginPage,
    RegisterPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PromotionPage,
    RewardPage,
    RewardlistPage,
    SettingPage,
    LoginPage,
    RegisterPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenProvider
  ]
})
export class AppModule {}
