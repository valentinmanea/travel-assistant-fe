import { HotelPriceDto } from './HotelPriceDto';
import { HotelGuestsDto } from './HotelGuestsDto';
import { RoomDto } from "./RoomDto";

export class HotelOfferDto{
    id:string;
	rateCode:string;
    room:RoomDto;
    guest:HotelGuestsDto;
    price:HotelPriceDto;
}