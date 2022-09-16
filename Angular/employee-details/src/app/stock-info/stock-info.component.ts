import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.css']
})
export class StockInfoComponent implements OnInit {

  stockArray: string[] = [];
  stockName: string = "Add Stock Url";

  data: any =  {
    userDelay: 2000
  }

  jsonData = JSON.stringify(this.data);

  updateStockUrl(event: Event) {
    debugger;
    this.stockName = (event.target as HTMLInputElement).value;
  }

  addStockUrl() {
    alert(this.stockName);
    this.stockArray.push(this.stockName)
    this.stockName = "";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
