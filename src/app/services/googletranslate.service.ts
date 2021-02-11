import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiKeys } from '../../../.secret/api';
import { Google } from '../google.model';

@Injectable({
  providedIn: 'root'
})
export class GoogletranslateService {
  ApiKey: string = ApiKeys.APIKEY
  url: string = 'https://translation.googleapis.com/language/translate/v2/?key='

  constructor(private http: HttpClient) { }

  translate(obj: Google) {
    return this.http.post(this.url + this.ApiKey, obj)
  }
}
