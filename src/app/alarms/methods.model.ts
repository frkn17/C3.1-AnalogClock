import { Alarm } from "./alarm.model";
import { dataSource } from "./datasource.model";

export class allMethods {
    private dataSource: dataSource;
    private alarms: Alarm[];


    constructor() {
        this.dataSource = new dataSource();
        this.alarms = new Array<Alarm>();

        this.dataSource.getProducts().forEach(a => this.alarms.push(a));
        this.alarmControl();
        console.log(this.getAlarmsLength());
    }

    date: Date;
    selectedYear: string;
    years = ['2021', '2022'];
    selectedMonth: string;
    months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    selectedDay: string;
    days = [];
    selectedHour: string;
    hours = [];
    selectedMin: string;
    minutes = [];

    getAlarms(): Alarm[] {
        return this.alarms;
    }
    getAlarmsLength(): number {
        return this.alarms.length;
    }
    alarmControl() {
        setInterval(() => {
            this.date = new Date();
            for (let i = 0; i < this.getAlarmsLength(); i++) {
                if (this.alarms[i].hour === Number(this.date.getHours())) {
                    if (this.alarms[i].minute === Number(this.date.getMinutes())) {
                        if (this.alarms[i].day === Number(this.date.getDate())) {
                            if ((this.alarms[i].month - 1) === Number(this.date.getMonth())) {
                                if (this.alarms[i].year === Number(this.date.getFullYear())) {
                                    this.alarms[i].timeFor = 1;
                                    if (Number(this.date.getSeconds()) == 59) {
                                        this.alarms[i].timeFor = 2;

                                    }

                                }
                            }
                        }
                    }
                }
            }
        }, 1000);

    }
    setAlarm(name: string, year: string, month: string, day: string, hour: string, minute: string) {
        this.date = new Date();
        if (isNaN(Number(year))) {
            year = String(this.date.getFullYear());
        }
        if (isNaN(Number(month))) {
            month = String(this.date.getMonth() + 1);
        }
        if (isNaN(Number(day))) {
            day = String(this.date.getDate());
        }
        if (isNaN(Number(hour)) || isNaN(Number(minute))) {
            alert('Hour and Minute empty.');

        }
        else {
            this.alarms.push(new Alarm(this.getAlarmsLength(), name, Number(year), Number(month), Number(day), Number(hour), Number(minute), 0));
        }
        ;
    }
    delete(alarm: Alarm) {
        this.alarms = this.alarms.filter(a => a !== alarm);
        console.log(this.getAlarms());
        console.log(this.getAlarmsLength());

    }
    deleteAll() {
        this.alarms = [];
    }
    update(alarm: Alarm, name: string, year: string, month: string, day: string, hour: string, minute: string) {
        this.date = new Date();
        if (isNaN(Number(year))) {
            year = String(this.date.getFullYear());
        }
        if (isNaN(Number(month))) {
            month = String(this.date.getMonth() + 1);
        }
        if (isNaN(Number(day))) {
            day = String(this.date.getDate());
        }
        alarm.name = name;
        alarm.year = Number(year);
        alarm.month = Number(month);
        alarm.day = Number(day);
        alarm.hour = Number(hour);
        alarm.minute = Number(minute);
        alarm.timeFor = 0;
    }
    snooze(index: number) {
        if (this.alarms[index].minute !== 59) {
            this.alarms[index].minute++;
        }
        else {
            this.alarms[index].minute = 0;
            if (this.alarms[index].hour !== 23) {
                this.alarms[index].hour++;
            }
            else {
                this.alarms[index].hour = 0;
                if (this.alarms[index].month === 2) {
                    if ((this.alarms[index].day === 29) || (this.alarms[index].day === 28)) {
                        if (this.isLeapYear()) {
                            if (this.alarms[index].day === 28) {
                                this.alarms[index].day = 29;
                            }
                            else {
                                this.alarms[index].day = 1;
                                this.alarms[index].month = 3;
                            }

                        }
                        else {
                            if (this.alarms[index].day === 28) {
                                this.alarms[index].day = 1;
                                this.alarms[index].month = 3;
                            }
                            else {
                                this.alarms[index].day++;
                            }
                        }
                    }


                }
                else if (this.alarms[index].month === 1 || this.alarms[index].month === 3 || this.alarms[index].month === 5 || this.alarms[index].month === 7 || this.alarms[index].month === 8 || this.alarms[index].month === 10) {
                    if (this.alarms[index].day === 31) {
                        this.alarms[index].day = 1;
                        this.alarms[index].month++;
                    }
                    else {
                        this.alarms[index].day++;
                    }

                }
                else if (this.alarms[index].month === 4 || this.alarms[index].month === 6 || this.alarms[index].month === 9 || this.alarms[index].month === 11) {
                    if (this.alarms[index].day === 30) {
                        this.alarms[index].day = 1;
                        this.alarms[index].month++;
                    }
                    else {
                        this.alarms[index].month++;
                    }

                }
                else {

                    this.alarms[index].day = 1;
                    this.alarms[index].month = 1;
                    this.alarms[index].year++;
                }
            }
        }
        this.alarms[index].timeFor = 2;
    }
    setDays(): any[] {
        this.days = [];
        if (this.selectedMonth == "1" || this.selectedMonth == "3" || this.selectedMonth == "5" || this.selectedMonth == "7" || this.selectedMonth == "8" || this.selectedMonth == "10" || this.selectedMonth == "12") {
            for (let i = 1; i < 32; i++) {
                this.days[i] = String(i);
            }
        }
        else if (this.selectedMonth == "4" || this.selectedMonth == "6" || this.selectedMonth == "9" || this.selectedMonth == "11") {
            for (let i = 1; i < 31; i++) {
                this.days[i] = String(i);
            }
        }
        else {
            if (this.isLeapYear()) {
                for (let i = 1; i < 30; i++) {
                    this.days[i] = String(i);
                }
            }
            else {
                for (let i = 1; i < 29; i++) {
                    this.days[i] = String(i);
                }

            }

        }
        return this.days;
    }
    setHours(): any[] {
        for (let i = 0; i < 24; i++) {
            this.hours[i] = String(i);

        }
        return this.hours;

    }
    setMins() {
        for (let i = 0; i < 60; i++) {
            this.minutes[i] = String(i);
        }
        return this.minutes;
    }
    isLeapYear(): boolean {
        if (Number(this.selectedYear) % 4 == 0 && Number(this.selectedYear) % 100 != 0) {
            return true;

        }
        else {
            return false;
        }
    }
    getTimeFor(): Alarm {
        for (let i = 0; i < this.getAlarmsLength(); i++) {
            if (this.alarms[i].timeFor === 1) {
                return this.alarms[i];
            }
        }
    }
    getTimeForCount(): number {
        let x = 0;
        for (let i = 0; i < this.getAlarmsLength(); i++) {
            if (this.alarms[i].timeFor === 1) {
                x++;
            }
        }
        return x;
    }
}