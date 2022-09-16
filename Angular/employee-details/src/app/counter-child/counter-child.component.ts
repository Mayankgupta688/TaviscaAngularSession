import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import AppService from 'src/services/app.service';

@Component({
  selector: 'app-counter-child',
  templateUrl: './counter-child.component.html',
  styleUrls: ['./counter-child.component.css']
})
export class CounterChildComponent implements OnInit {

  @Input() counter: number = 0;
  @Output() notifyParent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private _appService: AppService) { 
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChange) {
    debugger;
  }

  ngOnDestroy() {
  }

  addCounter() {
    this._appService.addCounter();
  }

  addCounterWithOutput() {
    debugger;
    this.notifyParent.emit();
  }

}
