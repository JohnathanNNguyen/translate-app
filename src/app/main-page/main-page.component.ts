import { Component, OnInit, HostListener } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Google } from '../google.model';
import { GoogletranslateService } from '../services/googletranslate.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  lang = new FormControl('en');
  translateObj: Google = new Google();
  translated: string = '';
  isMobile: boolean;
  public innerWidth: any;

  constructor(private trans: GoogletranslateService) {}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkWindowSize();
  }
  ngOnInit() {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  onTranslate(textInput: string, targetLanguage: string) {
    this.translateObj.target = targetLanguage;
    this.translateObj.q = textInput;
    this.trans.translate(this.translateObj).subscribe(
      (res: any) => {
        this.translated = res.data.translations[0].translatedText;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
