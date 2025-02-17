import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { BonusAccount } from "./class/BonusAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
console.log("PeopleAccount:", peopleAccount);
peopleAccount.deposit(100);
peopleAccount.withdraw(50);
console.log(`PeopleAccount saldo: ${peopleAccount.getBalance()}`);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(200);
companyAccount.getLoan(100);
companyAccount.withdraw(50);
console.log(`CompanyAccount saldo: ${companyAccount.getBalance()}`);

const bonusAccount: BonusAccount = new BonusAccount("Bônus", 30);
bonusAccount.deposit(100);
bonusAccount.withdraw(50);
console.log(`BonusAccount saldo: ${bonusAccount.getBalance()}`);
