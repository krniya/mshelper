import { Subjects } from "./subjects";
export interface OrderCreatedEvent {
    subject: Subjects.OrderCreated;
    data: {
        id: string;
        createdAt: Date;
        event: {
            _id: string;
            title: string;
            price: string;
        };
        buyer: {
            _id: string;
            firstName: string;
            lastName: string;
        };
        expiresAt: Date;
    };
}
