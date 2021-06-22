import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelBaseComponent } from './channel-base/channel-base.component';
import { ChannelOneComponent } from './channel-base/channel-one/channel-one.component';
import { ChannelTwoComponent } from './channel-base/channel-two/channel-two.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChannelBaseComponent,
    ChannelOneComponent,
    ChannelTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[ChannelBaseComponent],
  entryComponents: [ChannelBaseComponent, ChannelOneComponent, ChannelTwoComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
