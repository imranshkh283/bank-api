interface Transaction {
  Amount: number;
  Date: any;
  Total: number;
  Type: string;
}

export class Account {
  protected balanced: number = 0;
  public withdrawDate: number = 0;
  public depositDate: number = 0;
  protected log: any[] = [];

  transaction(trans: Transaction) {
    this.log.push({
      Amount: trans.Amount,
      Date: this.timelog(),
      Total: this.balanced,
      Type: trans.Type,
    });
  }

  deposit(amount: number) {
    this.balanced += amount;
    const data: Transaction = {
      Amount: amount,
      Date: this.timelog(),
      Total: this.balanced,
      Type: "deposit",
    };
    this.transaction(data);
    /* this.log.push({
      Amount: amount,
      Date: this.timelog(),
      Total: this.balanced,
      Type: "deposit",
    }); */
    return true;
  }

  withdraw(amount: number) {
    this.balanced -= amount;
    this.log.push({
      Amount: amount,
      Date: this.timelog(),
      Total: this.balanced,
      Type: "withdraw",
    });
    return true;
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

  timelog() {
    const unixTimestamp = Date.now();
    const dateObject = new Date(unixTimestamp);
    const formattedDate = dateObject.toLocaleString();
    return formattedDate;
  }
}
