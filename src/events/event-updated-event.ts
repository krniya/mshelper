import { Subjects } from "./subjects";

export interface TicketUpdatedEvent {
    subject: Subjects.EventUpdated;
    data: {
        id: string;
        title: String;
        description: String;
        location: String;
        createdAt: Date;
        imageUrl: String;
        startDateTime: Date;
        endDateTime: Date;
        price: String;
        isFree: Boolean;
        url: String;
        userId: string;
        version: number;
    };
}
