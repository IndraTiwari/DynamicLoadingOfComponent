import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelOneComponent } from './channel-one.component';

describe('ChannelOneComponent', () => {
  let component: ChannelOneComponent;
  let fixture: ComponentFixture<ChannelOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
