import { HotelPriceDto } from './HotelPriceDto';
import { HotelGuestsDto } from './HotelGuestsDto';
export class HotelOfferDto{
    id:string;  
	rateCode:string;
    guests:HotelGuestsDto;
    price:HotelPriceDto;
}