import { Component, OnInit } from '@angular/core';
import {SCHEDULE_TRAININGS, ScheduleModel} from "../../models/schedule.model";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
 public schedule: ScheduleModel[] = SCHEDULE_TRAININGS;
  constructor() { }

  ngOnInit(): void {
  }

}
