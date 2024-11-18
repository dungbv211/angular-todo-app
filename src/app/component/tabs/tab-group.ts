import { CommonModule, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { IsAdultPipe } from '../../pipe';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.html',
  standalone: true,
  imports: [NgFor, CommonModule,IsAdultPipe],
})
export class TabGroupComponent implements OnInit {
  tabPanelList: any[] = [
    {
      title: 'tab1',
      Content: 'content 1',
    },
    {
      title: 'tab2',
      Content: 'content 2',
    },
    {
      title: 'tab3',
      Content: 'content 3',
    },
  ];

  Users: any[] = [
    {
      name: 'tab1',
      age: 16,
    },
    {
      name: 'tab2',
      age: 20,
    },
    {
      name: 'tab3',
      age: 25,
    },
  ];


  @Input() tabActiveIndex = 0;
  @Output() tabActiveChange = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}
  selectItem(idx: number) {
    this.tabActiveIndex = idx;
    this.tabActiveChange.emit(idx);
  }
}
