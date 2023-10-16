export type PaidUser = {
    type: "paid-user";
    id: string;
    name: string;
    // other viewer-specific attributes
};

export type User = PaidUser ;
