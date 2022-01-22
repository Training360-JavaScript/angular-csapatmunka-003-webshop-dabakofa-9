import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Sample Webshop';

  menuItems: IMenuItem[] = [
    {text: 'Home', link: '/', icon: 'home'},
    {text: 'Ifjúsági', link: '/cat01'},
    {text: 'Kortárs', link: '/cat02'},
    {text: 'Útikönyvek', link: '/cat03'},
  ];

  constructor() { }
}
