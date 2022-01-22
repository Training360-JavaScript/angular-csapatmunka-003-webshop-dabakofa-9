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

  appName: string = 'Áruháznév';

  menuItems: IMenuItem[] = [
    {text: 'Kezdőlap', link: '/', icon: 'home'},
    {text: 'Ifjúsági', link: '/ifjusagi'},
    {text: 'Kortárs', link: '/kortars'},
    {text: 'Útikönyvek', link: '/utikonyvek'},
  ];

  constructor() { }
}
