import { Subjects } from "./subjects";

export interface OrderCancelledEvent {
    subject: Subjects.OrderCancelled;
    data: {
        id: string;
        createdAt: Date;
        stripeId: string;
        totalAmount: string;
        event: {
            _id: string;
            title: string;
        };
        buyer: {
            _id: string;
            firstName: string;
            lastName: string;
        };
    };
}
