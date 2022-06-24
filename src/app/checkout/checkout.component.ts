import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.checkoutFormGroup = this.formBuilder.group({
      customerBilling : this.formBuilder.group({
        street:[''],
        city:[''],
        state:[''],
        zipCode:['']
        //user id = sessionStorage of the user
      }),
      paymentInfo: this.formBuilder.group({
        cardType:[''],
        cardNumber:[''],
        expDate:[''],
        cvv:[''],

      })
    })
  }

  onSubmit() {
    console.log("Handling form data");
    console.log(this.checkoutFormGroup.get('customerBilling')?.value);
  }


}
