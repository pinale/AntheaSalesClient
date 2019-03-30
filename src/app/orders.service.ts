import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get(`http://antheasales-dev.eu-west-2.elasticbeanstalk.com/api/orders`);
  }
}
