export interface CaseInfo {
    workUnitId: number;
    debtor: string;
    date: string;
    package: string;
    boughtAmount: Amount;
    paidAmount: Amount;
    dueAmount: Amount;
}

export interface Amount {
    amount: number;
    currency: string;
}