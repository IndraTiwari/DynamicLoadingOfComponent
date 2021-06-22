import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelBaseComponent } from './channel-base.component';

describe('ChannelBaseComponent', () => {
  let component: ChannelBaseComponent;
  let fixture: ComponentFixture<ChannelBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
