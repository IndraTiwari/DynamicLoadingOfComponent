import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { ChannelOneComponent } from './channel-one/channel-one.component';
import { ChannelTwoComponent } from './channel-two/channel-two.component';

@Component({
  selector: 'app-channel-base',
  templateUrl: './channel-base.component.html',
  styleUrls: ['./channel-base.component.scss']
})
export class ChannelBaseComponent implements OnInit {
@ViewChild('channelDynamicView', {read: ViewContainerRef, static: true}) channelDynamicView: ViewContainerRef | undefined;
private channelOne: ComponentRef<ChannelOneComponent>;
private channelTwo: ComponentRef<ChannelTwoComponent>;
public userType: string;

constructor(private resolver: ComponentFactoryResolver,
private injector: Injector) { 
  this.userType = 'User';
}

  ngOnInit(): void {
    this.channelDynamicView.clear();
    if(this.userType === 'Admin') {
      let channelFactory = this.resolver.resolveComponentFactory(ChannelOneComponent);
      this.channelOne = channelFactory.create(this.injector);
      this.channelDynamicView.insert(this.channelOne.hostView);
    }
    if(this.userType === 'User') {
      let channelFactory = this.resolver.resolveComponentFactory(ChannelTwoComponent);
      this.channelTwo = channelFactory.create(this.injector);
      this.channelDynamicView.insert(this.channelTwo.hostView);
    }
  }

}
