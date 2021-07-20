import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { authService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public translate: TranslateService,
    private service: authService
  ) {
    translate.addLangs(['en', 'np']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|np/) ? browserLang : 'en');
  }

  ngOnInit(): void {}
  logout(): void {
    this.service.logout();
  }
}
