import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-baitap-login',
    template: `
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark mt-5">
            <a class="navbar-brand" href="#">Cybersoft</a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item" *ngIf="!isLogin;">
                        <a class="nav-link" href="#" data-toggle="modal" data-target="#modelId">Login</a>
                    </li>
                    <li class="nav-item" *ngIf="isLogin;" >
                        <a class="nav-link" href="#">Hello {{userName}}! <span (click)="logout()">Logout</span> </a>
                    </li>

                   
                </ul>
            </div>
        </nav>

        <div *ngIf="isLogin">
            <app-baitap-qlsp></app-baitap-qlsp>
        </div>



        <!-- Modal -->
        <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Login</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div class="modal-body">
                        <p>Username</p>
                        <input type="text" class="form-control" [(ngModel)]="userLogin.username"/>

                        <p>Password</p>
                        <input type="text" class="form-control" [(ngModel)]="userLogin.password"/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" (click)="login()">Login</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class BaiTapLoginComponent implements OnInit {

    constructor() { }

    ngOnInit() {

        if (localStorage.getItem('userInfo')) {
            this.userName = localStorage.getItem('userInfo')!;
            this.isLogin = true;
        }
    }

    userLogin: any = {
        username: '',
        password: '',
    };

    userName: string = 'cybersoft';
    isLogin: boolean = false;



    login = () => {
        if (this.userLogin.username === 'cybersoft' &&
            this.userLogin.password === 'cybersoft') {
            this.isLogin = true;

            localStorage.setItem('userInfo', this.userLogin.username);
        }
    }

    logout = () => {
        this.isLogin = false;
        localStorage.removeItem('userInfo');
    }

}