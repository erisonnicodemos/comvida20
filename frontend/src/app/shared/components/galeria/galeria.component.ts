import { Component, OnInit } from '@angular/core';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from 'ngx-gallery-9';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html'
})
export class GaleriaComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit(): void {


    this.galleryOptions = [
      { "thumbnailsMoveSize": 4 },
      { "breakpoint": 500, "width": "300px", "height": "300px", "thumbnailsColumns": 3 },
      { "breakpoint": 300, "width": "100%", "height": "200px", "thumbnailsColumns": 2 }
    ];

    this.galleryImages = [
      {
        small: 'assets/galeria/4500-máscaras-N95---EDP.png',
        medium: 'assets/galeria/4500-máscaras-N95---EDP.png',
        big: 'assets/galeria/4500-máscaras-N95---EDP.png'
      },
      {
        small: 'assets/galeria/Anna Pegova.png',
        medium: 'assets/galeria/Anna Pegova.png',
        big: 'assets/galeria/Anna Pegova.png'
      },
      {
        small: 'assets/galeria/CacauShow-01.png',
        medium: 'assets/galeria/CacauShow-01.png',
        big: 'assets/galeria/CacauShow-01.png'
      },
      {
        small: 'assets/galeria/CacauShow-02.png',
        medium: 'assets/galeria/CacauShow-02.png',
        big: 'assets/galeria/CacauShow-02.png'
      },
      {
        small: 'assets/galeria/CamaraArabe01.png',
        medium: 'assets/galeria/CamaraArabe01.png',
        big: 'assets/galeria/CamaraArabe01.png'
      },
      {
        small: 'assets/galeria/CamaraArabe02.png',
        medium: 'assets/galeria/CamaraArabe02.png',
        big: 'assets/galeria/CamaraArabe02.png'
      },
      {
        small: 'assets/galeria/Emilio-Carros.png',
        medium: 'assets/galeria/Emilio-Carros.png',
        big: 'assets/galeria/Emilio-Carros.png'
      },
      {
        small: 'assets/galeria/Face-Shields-Guardioes-ProVida.png',
        medium: 'assets/galeria/Face-Shields-Guardioes-ProVida.png',
        big: 'assets/galeria/Face-Shields-Guardioes-ProVida.png'
      },
      {
        small: 'assets/galeria/Face-Shields.png',
        medium: 'assets/galeria/Face-Shields.png',
        big: 'assets/galeria/Face-Shields.png'
      },
      {
        small: 'assets/galeria/Fronhas.png',
        medium: 'assets/galeria/Fronhas.png',
        big: 'assets/galeria/Fronhas.png'
      },
      {
        small: 'assets/galeria/Fundacao-Tide-Setubal.png',
        medium: 'assets/galeria/Fundacao-Tide-Setubal.png',
        big: 'assets/galeria/Fundacao-Tide-Setubal.png'
      },
      {
        small: 'assets/galeria/Levain-Escola-de-Panificacao.png',
        medium: 'assets/galeria/Levain-Escola-de-Panificacao.png',
        big: 'assets/galeria/Levain-Escola-de-Panificacao.png'
      },
      {
        small: 'assets/galeria/Mercado-Siga.png',
        medium: 'assets/galeria/Mercado-Siga.png',
        big: 'assets/galeria/Mercado-Siga.png'
      },
      {
        small: 'assets/galeria/outback01.png',
        medium: 'assets/galeria/outback01.png',
        big: 'assets/galeria/outback01.png'
      },
      {
        small: 'assets/galeria/outback02.png',
        medium: 'assets/galeria/outback02.png',
        big: 'assets/galeria/outback02.png'
      },
      {
        small: 'assets/galeria/Sabonete-líquido-antisséptico-Mavaro.png',
        medium: 'assets/galeria/Sabonete-líquido-antisséptico-Mavaro.png',
        big: 'assets/galeria/Sabonete-líquido-antisséptico-Mavaro.png'
      },
      {
        small: 'assets/galeria/Saint-Pauls-School.png',
        medium: 'assets/galeria/Saint-Pauls-School.png',
        big: 'assets/galeria/Saint-Pauls-School.png'
      },
      {
        small: 'assets/galeria/SENAC-diversos.png',
        medium: 'assets/galeria/SENAC-diversos.png',
        big: 'assets/galeria/SENAC-diversos.png'
      },
      {
        small: 'assets/galeria/SESI-Suzano-alimentos.png',
        medium: 'assets/galeria/SESI-Suzano-alimentos.png',
        big: 'assets/galeria/SESI-Suzano-alimentos.png'
      },
      {
        small: 'assets/galeria/Shopping-Morumbi.png',
        medium: 'assets/galeria/Shopping-Morumbi.png',
        big: 'assets/galeria/Shopping-Morumbi.png'
      },
      {
        small: 'assets/galeria/Shopping-Osasco.png',
        medium: 'assets/galeria/Shopping-Osasco.png',
        big: 'assets/galeria/Shopping-Osasco.png'
      },
      {
        small: 'assets/galeria/Talheres-descartaveis.png',
        medium: 'assets/galeria/Talheres-descartaveis.png',
        big: 'assets/galeria/Talheres-descartaveis.png'
      },
      {
        small: 'assets/galeria/Voluntaria-Iracilda-Silva-Reis.png',
        medium: 'assets/galeria/Voluntaria-Iracilda-Silva-Reis.png',
        big: 'assets/galeria/Voluntaria-Iracilda-Silva-Reis.png'
      },
      {
        small: 'assets/galeria/Ype-Alcool-em-Gel.png',
        medium: 'assets/galeria/Ype-Alcool-em-Gel.png',
        big: 'assets/galeria/Ype-Alcool-em-Gel.png'
      },


    ];

  }

}
