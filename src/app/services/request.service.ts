import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RequestService {
  constructor(private http: HttpClient) {}

  getHandicaps() {
    return this.http.get('/handicaps/all');
  }
}