import { Subjects } from "./subjects";
export interface EventCreatedEvent {
    subject: Subjects.EventCreated;
    data: {
        id: string;
        title: string;
        description?: string;
        location?: string;
        createdAt: Date;
        imageUrl: string;
        startDateTime: Date;
        endDateTime: Date;
        price: string;
        isFree: boolean;
        url?: string;
        category: { _id: string; name: string };
        organizer: { _id: string; firstName: string; lastName: string };
        version: number;
    };
}
