import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.less']
})
export class SidenavListComponent implements OnInit {

  @Output() CloseSidenav = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.CloseSidenav.emit();
  }

}