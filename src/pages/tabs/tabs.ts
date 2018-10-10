import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PromotionPage } from '../promotion/promotion';
import { RewardPage } from '../reward/reward';
import { RewardlistPage } from '../rewardlist/rewardlist';
import { SettingPage } from '../setting/setting';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PromotionPage;
  tab3Root = RewardPage;
  tab4Root = RewardlistPage;
  tab5Root = SettingPage;
  
  constructor() {

  }
}
