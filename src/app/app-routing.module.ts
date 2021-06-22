import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelBaseComponent } from './channel-base/channel-base.component';

const routes: Routes = [ {
  path:'channel',
  component: ChannelBaseComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
