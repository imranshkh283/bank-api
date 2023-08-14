export class Account {
  protected balanced: number = 0;
  public withdrawDate: number = 0;
  public depositDate: number = 0;
  protected log: any[] = [];

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

  deposit(amount: number) {
    this.balanced += amount;
    this.log.push({
      Amount: amount,
      Date: this.timelog(),
      Total: this.balanced,
      Type: "deposit",
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
