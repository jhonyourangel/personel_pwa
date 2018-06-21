import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../network/transactions.service';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  traSer: TransactionsService;
  transactions: [Transaction];
  newTransaction: Transaction;

  constructor(traSer: TransactionsService) {
    this.traSer = traSer;
  }

  ngOnInit() {
    this.traSer.transactions()
      .subscribe((data: [Transaction]) => {
        this.transactions = data;
      });
  }

  prepareNewTransaction() {
    this.newTransaction = new Transaction();
    this.newTransaction._id = '';
    this.newTransaction.billed = false;
    this.newTransaction.creationDate = new Date();
    this.newTransaction.description = 'no description';
    this.newTransaction.editDate = new Date();
    this.newTransaction.endTime = new Date();
    this.newTransaction.projectName = 'unknown';
    this.newTransaction.startTime = new Date();
    this.newTransaction.userId = '';

    this.transactions.splice(0, 0, this.newTransaction);
  }

}
