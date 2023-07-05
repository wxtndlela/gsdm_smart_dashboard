export interface TransactionModal {
    user_id: string,
    transaction_id: string,
    date_created: string,
    description: string,
    amount: Number,
    balance: Number,
    currency: string
}