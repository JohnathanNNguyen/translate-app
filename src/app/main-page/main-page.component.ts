import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Google } from '../google.model';
import { GoogletranslateService } from '../services/googletranslate.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  lang = new FormControl('en');
  translateObj: Google = new Google()
  translated: string = ''

  constructor(private trans: GoogletranslateService,) { }

  onTranslate(textInput: string, targetLanguage: string) {
    this.translateObj.target = targetLanguage
    this.translateObj.q = textInput
    this.trans.translate(this.translateObj)
      .subscribe((res: any) => {
        this.translated = res.data.translations[0].translatedText
      },
        err => {
          console.log(err)
        }
      )
  }
}

