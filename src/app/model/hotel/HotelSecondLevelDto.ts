import { HotelOfferDto } from './HotelOfferDto';
import { HotelDto } from './HotelDto';
export class HotelSecondLevelDto{
    type:string
	hotel:HotelDto;
	available:boolean;
	offers:HotelOfferDto[];
}