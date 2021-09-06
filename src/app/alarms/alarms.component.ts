import { Component, OnInit } from '@angular/core';
import { allMethods } from './methods.model';

@Component({
  selector: 'alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.css']
})
export class AlarmsComponent implements OnInit {



  alarms:allMethods = new allMethods();

  constructor() { }

  ngOnInit() {
  }

  

}
