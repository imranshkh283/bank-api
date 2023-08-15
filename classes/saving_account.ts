interface ISavingAccount {
  accountNumber: string;
  createdDate: string;
}

import { Bank } from "./account";

class SavingAccount extends Bank {
  private accountlist: ISavingAccount[] = [];

  createAccount(accountNumber: string) {
    const account: ISavingAccount = {
      accountNumber,
      createdDate: Bank.timelog(),
    };
    this.accountlist.push(account);
  }
  getAccount() {
    return this.accountlist;
  }
}

export { SavingAccount };
