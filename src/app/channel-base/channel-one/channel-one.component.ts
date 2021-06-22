import { Component, OnInit } from '@angular/core';
import { ChannelBaseClass } from '../channel-base-class';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-channel-one',
  templateUrl: './channel-one.component.html',
  styleUrls: ['./channel-one.component.scss']
})
export class ChannelOneComponent extends ChannelBaseClass {

  constructor(protected formBuilder: FormBuilder) { super (formBuilder) }

  

}
