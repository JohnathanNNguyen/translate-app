import { Injectable } from '@angular/core';
import { ApiKey } from '../../.secret/api-key';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslateApiService {
  constructor(
    private http: HttpClient,
  ) { }
  translate(obj: GoogleObj, key: string) {
    return this.http.post(url + key, obj);
  }

}
const apiKey = ApiKey.GOOGLE_APPLICATION_CREDENTIALS
const url = "https://translation.googleapis.com/language/translate/v2?key=" + apiKey;


export class GoogleObj {
  q: string;
  readonly source: string = 'en';
  readonly target: string = 'es';
  readonly format: string = 'text';

  constructor() { }
}
