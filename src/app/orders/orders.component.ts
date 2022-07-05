import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../models/course.model';
import { Order } from '../models/order.model';
import { OrderCourseSet } from '../models/ordercourseset.model';
import { User } from '../models/user.model';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orderHistoryList: OrderCourseSet[] = [];
  user: User = {
    id: 0,
    name: '',
    email: '',
    phoneNumber: '',
    username: '',
    password: '',
    darkModePreference: false,
    registerDate: new Date(),
    roleId: 0,
  };

  constructor(private ordersService: OrdersService, private router: Router) {}

  ngOnInit(): void {
    this.handleOrderHistory();
  }

  handleOrderHistory() {
    let userData: any = sessionStorage.getItem('user');
    if (userData != null) {
      this.user = JSON.parse(userData) as User;
    } else {
      this.router.navigateByUrl('');
    }
    this.ordersService.getOrderHistory(this.user.id).subscribe({
      next: (response) => {
        let currOrderId: number = 0;
        let index: number = 0;
        for (let orderCourse of response) {
          if (orderCourse.order.id == currOrderId) {
            this.orderHistoryList[index - 1].courses.push(orderCourse.course);
          } else {
            let order: Order = orderCourse.order;
            let courses: Course[] = [];
            let orderCourseSet: OrderCourseSet = {
              order: order,
              courses: courses,
            };
            this.orderHistoryList.push(orderCourseSet);
            this.orderHistoryList[index].courses.push(orderCourse.course);
            currOrderId = order.id;
            index++;
          }
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
