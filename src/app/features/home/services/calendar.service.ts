import { Injectable } from "@angular/core";

export class Appointment {
  Subject!: string;
  startDate!: Date;
  endDate!: Date;
  allDay?: boolean;
  EmployeeID!: number;
}

let appointments: Appointment[] = [
  {
    EmployeeID: 1,
    Subject: "Website Re-Design Plan",
    startDate: new Date("2021-05-24T06:30:00.000Z"),
    endDate: new Date("2021-05-24T08:30:00.000Z"),
  },
  {
    EmployeeID: 1,
    Subject: "Book Flights to San Fran for Sales Trip",
    startDate: new Date("2021-05-24T09:00:00.000Z"),
    endDate: new Date("2021-05-24T10:00:00.000Z"),
    allDay: true
  },
  {
    EmployeeID: 1,
    Subject: "Install New Router in Dev Room",
    startDate: new Date("2021-05-24T11:30:00.000Z"),
    endDate: new Date("2021-05-24T12:30:00.000Z")
  },
  {
    EmployeeID: 1,
    Subject: "Approve Personal Computer Upgrade Plan",
    startDate: new Date("2021-05-25T07:00:00.000Z"),
    endDate: new Date("2021-05-25T08:00:00.000Z")
  }
];

@Injectable()
export class CalendarService {
  getAppointments(): Appointment[] {
    return appointments;
  }
}
