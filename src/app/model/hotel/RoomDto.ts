import { HotelDto } from './HotelDto';
import { TypeEstimatedRoomDto } from './TypeEstimatedRoomDto';
import { RoomDescriptionDto } from './RoomDescriptionDto';
export class RoomDto{
    type:string;
    typeEstimated:TypeEstimatedRoomDto;
    description:RoomDescriptionDto;
}