import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let httpTestingController: HttpTestingController;
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(CartService);
    service = TestBed.get(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
