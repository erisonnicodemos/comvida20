import { Component } from '@angular/core';

@Component({
    selector: 'app-layout-page',
    template: '<app-menu></app-menu><router-outlet></router-outlet><app-footer></app-footer>'
    
})

export class LayoutComponent {}