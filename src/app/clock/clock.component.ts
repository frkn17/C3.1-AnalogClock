import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  constructor() {  
    this.getTime();
  }

  ngOnInit() {
  }

  hourRotate;
  minuteRotate;
  secondRotate;

  date:Date;
  hour:number;
  minute:number;
  second:number;

  getTime(){
    setInterval(()=>{
      this.date=new Date();
      this.hour=this.date.getHours();
      this.minute=this.date.getMinutes();
      this.second=this.date.getSeconds();
      this.clock();
    },1000);
  }

  clock(){
    this.hourRotate={
      transform:`rotate(${(this.hour*30)+180}deg)`
    }
    this.minuteRotate={
      transform:`rotate(${(this.minute*6)+180}deg)`
    }
    this.secondRotate={
      transform:`rotate(${(this.second*6)+180}deg)`
    }



  }

}
