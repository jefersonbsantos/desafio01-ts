import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (loanAmount: number): void => {
    if (this.validateStatus()) {
      this.addToBalance(loanAmount);
      console.log(
        `Você pegou um empréstimo de ${loanAmount}. Saldo atual: ${this.getBalance()}`
      );
    }
  };
}
