import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiTokenEndpoint = `${environment.apiBaseURL}Token`;

  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string): Observable<string> {
    const headers = this.createAuthorizationHeader(username, password);
    return this.http.post<string>(this.apiTokenEndpoint, {}, { headers });
  }

  private createAuthorizationHeader(username: string, password: string): HttpHeaders {
    const encodedCredentials = this.encodeCredentials(username, password);
    return new HttpHeaders().set('Authorization', `Basic ${encodedCredentials}`);
  }

  private encodeCredentials(username: string, password: string): string {
    const credentials = `${username}:${password}`;
    return btoa(credentials);
  }
}