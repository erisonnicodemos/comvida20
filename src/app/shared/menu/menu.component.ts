import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  navbarOpen = false;

  constructor() { }

  ngOnInit() { }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  fecharNav(){
    this.navbarOpen = false;
  }
}
