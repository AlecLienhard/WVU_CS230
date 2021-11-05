import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./authResponse";

    @Component({
        selector: 'drive-auth',
        templateUrl: 'auth.component.html'
    })
    export class AuthComponent{

        private response!:Observable<AuthResponse>;
        public buttonClicked:string = "";

        constructor(private authService:AuthService){

        }
        public onSubmit(form:NgForm){
            console.log("Button Clicked: " + this.buttonClicked);
            console.log(form.value);
            const email = form.value.email;
            const password = form.value.password;

            if(this.buttonClicked == 'Login'){
                this.response = this.authService.login(email, password);
            }

            if(this.buttonClicked == "Sign Up"){
                this.response = this.authService.signUp(email, password);

            }

           this.response.subscribe(
                (data:AuthResponse) => {
                    console.log(data);
                },
                error =>{
                    console.log(error.error.error);
                }
            );
            form.resetForm();
        }
    }