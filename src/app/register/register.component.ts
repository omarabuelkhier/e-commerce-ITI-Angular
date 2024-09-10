import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm:FormGroup;
submitted:boolean = false;

constructor(private fb: FormBuilder){
  this.registerForm = this.fb.group({
    name: ['', [Validators.required]],
    username: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]+$")]],
    email: ['',[Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z@*#]{8,}$')]],
     confirmPassword: [ '',[Validators.required,]],


  },
// {       validators: [confirmPasswordValidator]
// }
);
}

get name(){ return this.registerForm.get('name'); }
get username(){ return this.registerForm.get('username')};
get email(){ return this.registerForm.get('email'); }
get password(){ return this.registerForm.get('password'); }
get confirmPassword(){return this.registerForm.get('confirmPassword')}
handleRegisterSubmit(){
  console.log(this.registerForm);
}

   onSubmit() {
        this.submitted = true;
console.log(this.registerForm.errors?.['PasswordNoMatch'])
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
      }
    //     onReset() {
    //     this.submitted = false;
    //     this.registerForm.reset();
    // }

}
