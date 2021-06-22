import { Directive, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators, ValidationErrors } from "@angular/forms";

@Directive({})
export class ChannelBaseClass implements OnInit {

  public customerForm: FormGroup;
  public firstName = new FormControl("");
  public lastName = new FormControl("",this.noSpacerule.bind(this));
  public age = new FormControl("");
  public email = new FormControl("",[Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]);
  public userValue: string = "Admin";
   
  constructor(protected formBuilder: FormBuilder){
    }

    ngOnInit() {
     this.createForm();
    }

    // creatong form
    public createForm() {
        this.customerForm = this.formBuilder.group({
          firstName: this.firstName,
          lastName: this.lastName,
          age: this.age,
          email: this.email
        });
      }
    
    //   adding form validators
      addValidators(formControl?: string) {
        this.customerForm.controls[formControl].setValidators([
          Validators.required
        ]);
        this.customerForm.controls[formControl].updateValueAndValidity();
      }
    
    //   removing form validators
      removeValidators(formControl?: string) {
        this.customerForm.controls[formControl].setValidators([]);
        this.customerForm.controls[formControl].reset();
        this.customerForm.controls[formControl].updateValueAndValidity();
      }

       // for mark all filed as touched
  markAllFieldAsTouched(form: FormGroup | FormGroup[]) {
    if (form instanceof Array) {
      (<FormGroup[]>form).forEach(eachForm => {
        if (eachForm.controls) {
          Object.keys(eachForm.controls).forEach((key: string) => {
            eachForm.get(key).markAsTouched();
          });
        }
      });
    } else if (form.controls) {
      Object.keys(form.controls).forEach((key: string) => {
        form.get(key).markAsTouched();
      });
    }
  }

  // checking no space
  noSpacerule(fieldValue: FormControl): ValidationErrors {
    if (fieldValue && fieldValue.value) {
      return fieldValue.value.toString().trim.length() > 0
        ? null
        : { allspace: true };
    }
  }

  onSubmit() {

    if (this.userValue == "Admin") {
      this.addValidators("firstName");
      this.addValidators("lastName");
      this.addValidators("email");
      this.markAllFieldAsTouched(this.customerForm);
    } else {
      this.firstName.reset();
      this.lastName.reset();
      this.removeValidators("lastName");
      this.removeValidators("firstName");
      this.removeValidators("lastName");
    }
    if (this.customerForm.valid) {
      alert("form submitted");
    }
  }
}