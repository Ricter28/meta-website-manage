export class MetaModel {
    user!: string;
    pass!: string;
    ipAdress!: string;
    cookie!: string;
    country!: string;
    HasCheckpoint: boolean = false;
    Agent!: string;
    adaccounts: AdaccountsModel[] = [];
    dateAdded!: Date;
    platform: string = 'Unknow';
}

export class AdaccountsModel{
    id!: string;
    currency!: string;
    name!: string;
    account_currency_ratio_to_usd: number = 0;
    adtrust_dsl: number = 366569;
    amount_spent: number = 0;
    account_status: number = 1;
    balance: number = 0;
    last_spend_time: number = 0;
    min_daily_budget: number = 7232;
    next_bill_date!: Date;
}
