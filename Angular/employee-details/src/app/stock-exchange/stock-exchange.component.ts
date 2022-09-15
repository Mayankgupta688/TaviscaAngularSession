import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock-exchange',
  templateUrl: './stock-exchange.component.html',
  styleUrls: ['./stock-exchange.component.css']
})
export class StockExchangeComponent implements OnInit {

  stockPrice: string = "0";
  previosPrice: string = "0";
  stockName: string = "";

  @Input("stockUrl") stockUrl: string = "";

  constructor(private _httpClient: HttpClient) { 
    
  }

  ngOnInit(): void {
    setInterval(() => {
      this._httpClient.get(this.stockUrl).subscribe((response: any) => {
        this.previosPrice = this.stockPrice;
        this.stockPrice = response['data']['pricecurrent'];
        this.stockName = response['data']['company']
      })
    }, 2000)
  }
}
