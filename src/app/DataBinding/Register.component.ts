import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register',
    template: `
        <div class="container">
            <h2>Register</h2>

            <div>
                <div class="form-group">
                    <p>Email</p>
                    <input  class="form-control" [(ngModel)] = "email" />
                </div>
                <div class="form-group">
                    <label for="fullName">Full Name</label>
                    <input type="text" class="form-control" type="fullName" value="{{fullName}}" #submitFullName>
                </div>
                <button class="btn btn-success" (click)="submitHandler(submitFullName.value)">Submit</button>

                
            </div>

            <p>Email: {{email}}</p>
            <p>Full Name: {{fullName}}</p>

        </div>

    `
})

export class RegisterComponent implements OnInit {

    email: string = "huynh@gmail.com";
    fullName: string = "huynh minh thong";

    submitHandler = (value: string) => {
        this.fullName = value;
    }



    constructor() { }

    ngOnInit() { }
}