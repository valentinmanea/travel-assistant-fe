import { NgbDate } from "@ng-bootstrap/ng-bootstrap/datepicker/ngb-date";

export class HousingOfferDto {
    id;
    price;
    hotel;
    numberOfDays;
    availableRooms;
    startDate: NgbDate;
    endDate: NgbDate;
}