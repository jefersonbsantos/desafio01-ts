export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;

  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => this.name;
  getAccountNumber = (): number => this.accountNumber;
  getBalance = (): number => this.balance;

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount;
      console.log(`Você depositou ${amount}. Saldo atual: ${this.balance}`);
    }
  };

  withdraw = (amount: number): void => {
    if (this.validateStatus()) {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Você sacou ${amount}. Saldo atual: ${this.balance}`);
      } else {
        console.log(
          `Saldo insuficiente para sacar ${amount}. Saldo atual: ${this.balance}`
        );
      }
    }
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return true;
    }
    throw new Error("Conta inválida");
  };

  protected addToBalance = (amount: number): void => {
    this.balance += amount;
  };
}
