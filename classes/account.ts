interface Transaction {
  Amount: number;
  Date: any;
  Total: number;
  Type: "deposit" | "withdraw";
  status: "success" | "failed";
}

export class Bank {
  protected balanced: number = 0;
  public log: Transaction[] = [];

  deposit(amount: number) {
    this.balanced += amount;
    const data: Transaction = {
      Amount: amount,
      Date: Bank.timelog(),
      Total: this.balanced,
      Type: "deposit",
      status: "success",
    };
    this.transaction(data);

    return true;
  }

  withdraw(amount: number) {
    this.balanced -= amount;
    const data: Transaction = {
      Amount: amount,
      Date: Bank.timelog(),
      Total: this.balanced,
      Type: "withdraw",
      status: "success",
    };
    this.transaction(data);
    return true;
  }

  transaction(trans: Transaction) {
    this.log.push({
      Amount: trans.Amount,
      Date: Bank.timelog(),
      Total: this.balanced,
      Type: trans.Type,
      status: trans.status,
    });
  }

  displayBalance() {
    return this.balanced;
  }

  filterTransaction(type: string) {
    const log = this.log.filter((item) => item.Type === type);
    return log;
  }

  displayLog() {
    return this.log;
  }

  static timelog() {
    const unixTimestamp = Date.now();
    const dateObject = new Date(unixTimestamp);
    const formattedDate = dateObject.toLocaleString();
    return formattedDate;
  }
}
