import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControlName } from '@angular/forms';

@Component({
  selector: 'order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent implements OnInit {
  public orderCardForm: FormGroup;
  public branchCodeList:Array<string>=["Option 1","Option 2","Option 3","Option 4",];
  public cardTypeList:Array<string>=["Option 1","Option 2","Option 3","Option 4",];
  public stateList:Array<string>=["Kerala","Maharashtra","Goa","Uttar Pradesh",];
  get data() { return this.orderCardForm.controls; }


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderCardForm = this.formBuilder.group({
      branchCode: ['', [Validators.required]],
      costCenter: ['', [Validators.required]],
      branchName: ['', [Validators.required]],
      cardType: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      designation1: ['', [Validators.required]],
      designation2: ['', [Validators.required]],
      addressLine1: ['', [Validators.required]],
      addressLine2: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.maxLength(10)]],
      phone: ['', [Validators.required,Validators.maxLength(8)]],
      email: ['', [Validators.required,Validators.email]],
      orderQuantity: ['', [Validators.required]],
      remarks: ['', [Validators.required]]
    });
  }

  // on submit click of form
  onSubmit(){

  }

}
