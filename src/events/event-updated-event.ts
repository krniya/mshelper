import { Subjects } from "./subjects";
export interface EventUpdatedEvent {
    subject: Subjects.EventUpdated;
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
        order: { _id: string };
        category: { _id: string; name: string };
        organizer: { _id: string; firstName: string; lastName: string };
        version: number;
    };
}
