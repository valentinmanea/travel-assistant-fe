import { RoomDto } from "./RoomDto";

export class HotelDto {
    id;
	name;
	city:string
	rooms:RoomDto[] = [];
	imgSrc;
}