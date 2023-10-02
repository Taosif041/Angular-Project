import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // This ensures that the service is available application-wide
})
export class ApiService {
  private apiUrl = 'https://api.gameofthronesquotes.xyz/v1/random/';

  constructor(private http: HttpClient) {}

  getQuotes(quoteCount: number): Observable<any[]> {
    const url = `${this.apiUrl}${quoteCount}`;
    return this.http.get<any[]>(url);
  }
}
