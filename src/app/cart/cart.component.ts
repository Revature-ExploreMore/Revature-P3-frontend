import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
//  currentCartItems: Cart [];
//  cartMessage: string "";
  
 
  
//  constructor(private cartService: CartService) { 
 //   this.currentCartItems = [];
  

  ngOnInit(): void {
 //   this.loadData();
  }
}
/*
  loadData(){
    this.currentCartItems;
  }

  getCartCourses(cartId: number){
    this.cartService.getCartCourses(cartId).subscribe({
      next: (response) => {
        console.log(response);
      //  this.cartMessage = '';
        this.currentCartItems = response;
      },
 //     error: (error) => {
 //       console.log(error.error.errorMessage);
  //      this.cartMessage = error.error.errorMessage;
  //    }
    });
  }

  deleteItem(cartCourseId: number){
    this.cartService.deleteItem(cartCourseId).subscribe((response)=>{
      console.log(response);
      this.loadData();
    });
  }
  */

