class SavingsAccount {
  private _memberId: number;
  private _balance: number;

  constructor(memberId: number, startingBalance: number) {
    this._memberId = memberId;
    this._balance = startingBalance;
  }

  getBalance() {
    return this._balance;
  }

  withdraw(amount: number) {
    if (amount > this._balance) {
      throw new Error("Insufficient funds");
    }
    this._balance -= amount;
  }

  deposit(amount: number) {
    this._balance += amount;
  }
}
// comment
class BankMember {
  private _name: string;
  private _memberId: number;
  private _savingsAccount!: SavingsAccount;

  constructor(name: string) {
    this._name = name;
    this._memberId = this.generateId();
  }

  depositToSavings(amount: number) {
    this._savingsAccount.deposit(amount);
  }

  withdrawFromSavings(amount: number) {
    this._savingsAccount.withdraw(amount);
  }

  viewSavingsBalance() {
    `Your balance is: 
    ${this._savingsAccount.getBalance()}`;
  }

  createSavingsAccount(startingBalance: number) {
    this._savingsAccount = new SavingsAccount(this._memberId, startingBalance);
  }

  private generateId(): number {
    const possibilities = "1234567890";
    let generated = "";
    for (let i = 0; i < 6; i++) {
      generated += possibilities.charAt(Math.random() * possibilities.length);
    }
    return parseInt(generated);
  }
}

const james = new BankMember("James");
james.createSavingsAccount(40);
james.depositToSavings(10);
james.viewSavingsBalance();
