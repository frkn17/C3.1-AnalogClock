import { Alarm } from "./alarm.model";

export class dataSource{
    private alarms:Alarm[];
    

    constructor(){
        this.alarms = new Array<Alarm>(
            
        );
        
    }

    getProducts():Alarm[]{
        return this.alarms;
    }
}