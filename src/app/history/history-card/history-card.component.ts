import { Component, OnInit, Input } from '@angular/core';
import { TransactionsService } from '../../network/transactions.service';
import { Transaction } from '../../models/transaction';
import * as moment from 'moment';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.css']
})
export class HistoryCardComponent implements OnInit {
  todayColor = 'basic';
  @Input() trans: Transaction;
  tServ: TransactionsService;

  billed: boolean;
  creationDate: string;
  description: string;
  editDate: string;
  endTime: string;
  projectName: string;
  startTime: string;
  userId: string;
  workedDate: string;
  _id: string;

  editingMode = false;
  buttonTitle = 'Edit';
  buttonColor = '';

  constructor(tServ: TransactionsService) {
    this.tServ = tServ;
  }

  ngOnInit() {
    this.initProperties();
  }

  initProperties() {
    this.billed = this.trans.billed;
    this.creationDate = moment(this.trans.creationDate).format('DD MMMM YYYY');
    this.editDate = moment(this.trans.editDate, 'DD MMMM YYYY').format('DD MMMM YYYY');
    this.description = this.trans.description;
    this.endTime = moment(this.trans.endTime).format('HH:mm');
    this.projectName = this.trans.projectName;
    this.startTime = moment(this.trans.startTime).format('HH:mm');
    this.userId = this.trans.userId;
    this.workedDate = moment(this.trans.startTime).format('YYYY-MM-DD');
    this.todayColor = (moment(this.trans.startTime).format('DD MMMM YYYY') === moment().format('DD MMMM YYYY')) ? '#e5e6ab' : '';
    console.log(this.todayColor);
  }

  updateProperties() {
    this.trans.billed = this.billed;
    this.trans.creationDate = moment(this.creationDate, 'DD MMMM YYYY').toDate();
    this.trans.description = this.description;
    this.trans.editDate = moment(this.editDate, 'DD MMMM YYYY').toDate();
    this.trans.endTime = moment(`${this.workedDate} ${this.endTime}`, 'YYYY-MM-DD HH:mm').add(2, 'hours').toDate();
    this.trans.projectName = this.projectName;
    this.trans.startTime = moment(`${this.workedDate} ${this.startTime}`, 'YYYY-MM-DD HH:mm').add(2, 'hours').toDate();
    this.trans.userId = this.userId;
    this.todayColor = (moment(this.trans.startTime).format('DD MMMM YYYY') === moment().format('DD MMMM YYYY')) ? '#e5e6ab' : '';
    console.log(this.trans);
  }

  toggleEditingMode() {
    this.editingMode = !this.editingMode;
    this.buttonTitle = this.editingMode ? 'Cancel' : 'Edit';
    this.buttonColor = this.editingMode ? 'primary' : 'basic';
  }

  save() {
    if (this.trans._id === '') {
      console.log(`id: ${this.trans._id} : addTransaction`);
      this.addTransaction();
    } else {
      console.log(`id: ${this.trans._id} : updateTransaction`);
      this.updateTransaction();
    }
  }

  private addTransaction() {
    this.updateProperties();
    this.tServ.addTransaction(this.trans)
      .subscribe(data => {
        console.log(data);
      });
  }

  private updateTransaction() {
    this.updateProperties();
    this.tServ.editTransaction(this.trans)
      .subscribe(data => {
        console.log(data);
      });
  }
}
