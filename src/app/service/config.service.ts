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

  appName: string = 'DáBaKoFa könvesbolt';

  menuItems: IMenuItem[] = [
    {text: 'Kezdőlap', link: '/', icon: 'home'},
    {text: 'Ifjúsági', link: '/kategoria/1'},
    {text: 'Kortárs', link: '/kategoria/2'},
    {text: 'Útikönyvek', link: '/kategoria/3'},
  ];

  constructor() { }
}
