import { Component, OnInit, SimpleChange } from '@angular/core';
import AppService from 'src/services/app.service';

@Component({
  selector: 'app-counter-data',
  templateUrl: './counter-data.component.html',
  styleUrls: ['./counter-data.component.css']
})
export class CounterDataComponent implements OnInit {

  counter: number = 0;

  addCounter() {
    debugger;
    this.counter = this.counter + 1;
  }

  constructor(private _appService: AppService) { 

    this._appService.updateCounterEvent.subscribe(() => {
      this.addCounter();
    })
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
  }

  ngOnDestroy() {
  }

}
