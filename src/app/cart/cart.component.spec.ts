import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { CartService } from '../services/cart.service';

import { CartComponent } from './cart.component';


describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  

  
  
  beforeEach(async () => {
  
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule,FormsModule],
     
      
    })
    .compileComponents();
    fixture = TestBed.createComponent(CartComponent);
    fixture.detectChanges();
    
    component = fixture.componentInstance;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'My Cart'`, () => {
    const fixture = TestBed.createComponent(CartComponent);  
    expect(component.title).toEqual('My Cart');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CartComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('My Cart');
  });
});
