import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RewardlistPage } from './rewardlist';

@NgModule({
  declarations: [
    RewardlistPage,
  ],
  imports: [
    IonicPageModule.forChild(RewardlistPage),
  ],
})
export class RewardlistPageModule {}
