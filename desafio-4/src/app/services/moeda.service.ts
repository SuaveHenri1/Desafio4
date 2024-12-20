import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {
  private apiUrl = 'https://v6.exchangerate-api.com/v6/457be70cb7b40bc9ce50a91f/latest/USD'

  constructor(private http: HttpClient) { }

  getMoeda(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
