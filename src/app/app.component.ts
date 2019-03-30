import { OrdersService } from './orders.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Anthea Sales taxes problem';
  orders:any = []; 
  private orderSubscription: Subscription;

  constructor(private ordersService: OrdersService ) {}

  ngOnInit() {
    this.orderSubscription = this.ordersService.getOrders().subscribe(data => this.orders = data);
  }

  ngOnDestroy() {
    this.orderSubscription.unsubscribe();
  }
}
