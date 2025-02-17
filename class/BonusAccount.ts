import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      const totalDeposit = amount + 10;

      this.addToBalance(totalDeposit);
      console.log(
        `Depósito realizado com bônus. Valor depositado: ${totalDeposit}. Saldo atual: ${this.getBalance()}`
      );
    }
  };
}
