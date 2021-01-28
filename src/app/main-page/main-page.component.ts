import { Component, OnInit } from '@angular/core';
import { GoogleObj, TranslateApiService } from '../translate-api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public googleObj: GoogleObj = new GoogleObj();
  public key: string;
  public result = '';
  private btnSubmit: any;

  constructor(private _google: TranslateApiService) { }

  ngOnInit() {
    this.btnSubmit = document.getElementById('btnSubmit');
  }

  send() {
    this.btnSubmit.disabled = true;
    this._google.translate(this.googleObj, this.key).subscribe(
      (res: any) => {
        this.btnSubmit.disabled = false;
        this.result = res.data.translations[0].translatedText;
      },
      err => {
        console.log(err);
      }
    );
  }
}
