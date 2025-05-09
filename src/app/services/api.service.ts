import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cricketResponse } from '../model/cricket.response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }
  baseUrl="http://localhost:8080/api/v1";

  getRandomResponse(prompt: string): Observable <string> {
    return this.http.get<string>(`${this.baseUrl}/chat?inputText=${prompt}`, {
      responseType: 'text' as 'json'
    });
  }

  getCricketResponse(cricketPrompt: string): Observable<cricketResponse> {
    return this.http.get<cricketResponse>(`${this.baseUrl}/chat/cricket?inputText=${cricketPrompt}`); 
  }

  getImageResponse(imageDesc: string): Observable<string[]>{
    return this.http.get<string[]>(`${this.baseUrl}/chat/image?description=${imageDesc}`);
  }
}
