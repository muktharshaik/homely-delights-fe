export enum TransactionStatus {
    "SUCCESS"= "Success",
    "FAILED"= "Failed",
}

export interface Transaction {
    amount: string;
    name: string;
    email: string;
    status: TransactionStatus;
}