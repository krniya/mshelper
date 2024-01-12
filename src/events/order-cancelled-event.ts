import { Subjects } from "./subjects";
export interface OrderCancelledEvent {
    subject: Subjects.OrderCancelled;
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
        version: number;
    };
}
