import { HotelOffer } from './hotel/HotelOffer';
import { FlightOffer } from './flight/FlightOffer';
import { HotelService } from './../services/hotel.service';
export class FullOfferEntity{
    hotelOffer:HotelOffer;
    flightOffer:FlightOffer;
}