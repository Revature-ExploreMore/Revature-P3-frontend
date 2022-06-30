import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CartComponent } from '../cart/cart.component';
import { CartCourse } from '../models/cartcourse.model';


import { CartService } from './cart.service';

describe('CartService', () => {
  let httpTestingController: HttpTestingController;
  let cartService: CartService;
  let component : CartComponent;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;


  beforeEach(() => {
    TestBed.configureTestingModule({
     imports:[HttpClientTestingModule, RouterTestingModule]
    });
    cartService = TestBed.inject(CartService);
  });

  

  
  it('should be created', () => {
    expect(cartService).toBeTruthy();
  });
})
