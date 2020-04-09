import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Banco } from 'src/app/models/banco.model';
import { Bloco } from 'src/app/models/bloco.model';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  bancos: Banco[];
  blocos: Bloco[];

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private service: HomeService) { }

  ngOnInit() {
    this.obterBlocos();
    this.obterBancos();

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 14,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '100%',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/1.jpg',
        medium: 'assets/1.jpg',
        big: 'assets/1.jpg'
      },
      {
        small: 'assets/2.jpg',
        medium: 'assets/2.jpg',
        big: 'assets/2.jpg'
      },
      {
        small: 'assets/3.jpg',
        medium: 'assets/3.jpg',
        big: 'assets/3.jpg'
      },
      {
        small: 'assets/4.jpg',
        medium: 'assets/4.jpg',
        big: 'assets/4.jpg'
      },
      {
        small: 'assets/5.jpg',
        medium: 'assets/5.jpg',
        big: 'assets/5.jpg'
      },
      {
        small: 'assets/6.jpg',
        medium: 'assets/6.jpg',
        big: 'assets/6.jpg'
      },
      {
        small: 'assets/7.jpg',
        medium: 'assets/7.jpg',
        big: 'assets/7.jpg'
      },
      {
        small: 'assets/8.jpg',
        medium: 'assets/8.jpg',
        big: 'assets/8.jpg'
      },
      {
        small: 'assets/9.jpg',
        medium: 'assets/9.jpg',
        big: 'assets/9.jpg'
      },
      {
        small: 'assets/10.jpg',
        medium: 'assets/10.jpg',
        big: 'assets/10.jpg'
      },
      {
        small: 'assets/11.jpg',
        medium: 'assets/11.jpg',
        big: 'assets/11.jpg'
      },
      {
        small: 'assets/12.jpg',
        medium: 'assets/12.jpg',
        big: 'assets/12.jpg'
      },
      {
        small: 'assets/13.jpg',
        medium: 'assets/13.jpg',
        big: 'assets/13.jpg'
      },
      {
        small: 'assets/14.jpg',
        medium: 'assets/14.jpg',
        big: 'assets/14.jpg'
      }
    ];

  }

  obterBancos() {
    this.service.obterBancos()
      .subscribe((banco: Banco[]) => {
        this.bancos = banco;
      });
  }

  obterBlocos() {
    this.service.obterBlocos()
      .subscribe((bloco: Bloco[]) => {
        this.blocos = bloco;
      });
  }


}
