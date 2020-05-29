export class ScheduleModel {
  constructor(
    public id: number = 0,
    public title: string = null,
    public time: string = null,
    public day: string = null,
    public status: string = null,
  ) {}
}

export const SCHEDULE_TRAININGS: ScheduleModel[] = [
  new ScheduleModel(1,'Девочки 4-6 лет', '16:00 - 17:00', 'Понедельник - Четверг', 'идет набор'),
  new ScheduleModel(2,'Девочки 7-10 лет', '17:00 - 18:00', 'Понедельник - Четверг', 'идет набор'),
];
