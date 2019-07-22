import { HotelDto } from './HotelDto';
export class RoomDto{
    id;
    capacity:number;
    price:number;
    currency:string;
    hotel:HotelDto;
}