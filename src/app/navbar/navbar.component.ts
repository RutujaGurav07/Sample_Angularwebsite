import { Component, OnInit,ViewEncapsulation, AfterViewInit, Output, EventEmitter, HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
