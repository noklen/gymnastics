import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public news: boolean;
  public gallery: boolean;
  public about: boolean ;
  public schedule: boolean;
  public contact: boolean;
  public urls = [
    {
      button: this.news,
      url: '/news',
      name: 'Новости',
    },
    {
      button: this.gallery,
      url: '/gallery',
      name: 'Галерея',
    },
    {
      button: this.about,
      url: '/aboutUs',
      name: 'О нас',
    },
    {
      button: this.schedule,
      url: '/schedule',
      name: 'Рассписание',
    },
    {
      button: this.contact,
      url: '/contact',
      name: 'Контакты',
    }
  ];
  constructor() { }

  ngOnInit(): void {
    this.changePublic();
  }

  public changePublic() {
    this.urls.map( url => {
      if (location.pathname === url.url) {
        return url.button = true;
      }
      return url.button = false;
    })
  }
}
