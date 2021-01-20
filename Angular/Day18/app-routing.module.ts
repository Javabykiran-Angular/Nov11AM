import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapdemoComponent } from './bootstrapdemo/bootstrapdemo.component';
import { FollowerComponent } from './follower/follower.component';
import { HomeComponent } from './home/home.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QueryparameterComponent } from './queryparameter/queryparameter.component';


const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"Page1",component:Page1Component
  },
  {
    path:"Page2/:id",component:Page2Component
  },
  {
    path:"Page3/:id/:username",component:Page3Component
  },
  {
    path:"Follower",component:FollowerComponent
  },
  {
    path:"MyFollower",component:MyfollowerComponent
  },
  {
    path:"QueryParameter",component:QueryparameterComponent
  },
  {
    path:"Bootstrap",component: BootstrapdemoComponent
  },
  {
    path:"**",component:PagenotfoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
