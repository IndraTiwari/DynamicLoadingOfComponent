import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelTwoComponent } from './channel-two.component';

describe('ChannelTwoComponent', () => {
  let component: ChannelTwoComponent;
  let fixture: ComponentFixture<ChannelTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
