import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  auth(user: string, password: string) {
    const url = `${environment.apiBaseURL}Token`;
    const chainBase64 = this.toBase64(`${user}:${password}`);
    const headers = new HttpHeaders().set('Authorization', `Basic ${chainBase64}`);
    return this.http.post(url, {}, { headers });
  }

  toBase64(chain: string): string {
    return btoa(chain)
  }
}
