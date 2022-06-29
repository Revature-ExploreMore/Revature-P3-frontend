import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisteruserComponent } from './registeruser.component';

import { FormsModule } from '@angular/forms';
describe('RegisteruserComponent', () => {
  let component: RegisteruserComponent;
  let fixture: ComponentFixture<RegisteruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteruserComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule,FormsModule,]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should render title`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.registerform h1')?.textContent).toContain("Welcome To ExploreMore...");
  });
});
