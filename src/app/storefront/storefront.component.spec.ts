import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StorefrontComponent } from './storefront.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('StorefrontComponent', () => {
  let component: StorefrontComponent;
  let fixture: ComponentFixture<StorefrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorefrontComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorefrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
