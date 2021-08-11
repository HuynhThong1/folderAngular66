import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive',
    template: `
        <div class="container">
            <h3 class="text-center">Demo Directive</h3>

            <h5>Login to access.</h5>
            <table class="w-25 table table-bordered">
                <thead>
                    <tr>
                        <td>Username</td>
                        <td>cybersoft</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Password</td>
                        <td>cybersoft</td>
                    </tr>
                </tbody>
            </table>
            <div>

            <!-- <h3>*ngIf (Dùng để xác định render hoặc không render ra giao diện)</h3>
            <p *ngIf="status">Title: Cybersoft</p>
            <button class="btn btn-success" (click)="anHien()">Ẩn/Hiện</button>


            <div class="form-group mt-2 mb-2">
                <input type="text" class="w-25 form-control" #inputNumber />
                <button class="btn btn-outline-success" (click)="changeNumber(inputNumber.value)">OK</button>
            </div>

            <h3> Số: {{number}}  </h3>

            <div *ngIf="number%2 === 0"> Số Chẳn</div>
            <div *ngIf="number%2 !== 0"> Số Lẻ</div>



            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                <a class="dropdown-item" href="#">Action 1</a>
                                <a class="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <div class="nav-item" *ngIf="isLogin; else divLogin">
                            <a class="nav-link text-white" href="#">Hello {{userName}}! <span (click)="logout()">Đăng Xuất</span></a>
                        </div>


                        <ng-template #divLogin>
                            <div class="nav-item">
                                <a class="nav-link text-white" href="#" (click)="login()">Đăng Nhập</a>
                            </div>
                        </ng-template>
                    </form>
                </div>
            </nav>
            </div>

            <hr />
            <h3> *ngSwitchCase </h3>
            <div [ngSwitch]="color">
                <div *ngSwitchCase="'red'" style="color: red">Red</div>
                <div *ngSwitchCase="'green'" style="color: green">Green</div>
                <div *ngSwitchCase="'blue'" style="color: blue">Blue</div>
                <div *ngSwitchDefault style="color: orange">Orange</div>

            </div>
            <select class="form-control" [(ngModel)]="color">
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="orange">orange</option>
            </select>


            <hr/>

            <h3> *ngFor: Dùng để render các phần tử giống nhau trên giao diện</h3>

            <div class="row">
                <div class="col-4" *ngFor="let prod of arrProduct; let i = index"> 
                    <div class="card">
                        <img [src]="prod.image" class="w-100"/>
                        <div class="card-body"> 
                            <p>{{prod.name}}</p>
                            <p>{{prod.price}}</p>
                            <button class="btn btn-outline-success">Đặt hàng</button>
                        </div>
                    </div>

                </div>
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-white" *ngFor="let prod of arrProduct" [ngClass]="{'bg-dark': prod.id % 2 === 0, ' bg-success ': prod.id % 2 !== 0}">
                        <td>{{prod.id}}</td>
                        <td> <img [src]="prod.image" width="50" height="50"/></td>
                        <td>{{prod.name}}</td>
                        <td>{{prod.price}}</td>
                    </tr>
                </tbody>
            </table>

            <hr />

            <h3>ngStyle</h3>
            <p [ngStyle]="{'font-size':fontSize + 'px'}">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nam natus excepturi minima, laboriosam, adipisci reprehenderit possimus dicta dolore placeat obcaecati! Aperiam cupiditate dignissimos quaerat perferendis veritatis unde, consequatur fuga!</p>

            <button class="btn btn-outline-primary mr-2" (click)="tangFont()">+</button>
            <button class="btn btn-outline-primary mr-2" (click)="giamFont()">-</button> -->




            <app-baitap-login></app-baitap-login>

            




        </div>
    `
})

export class DirectiveComponent implements OnInit {

    fontSize:number = 15;

    tangFont = () => {
        this.fontSize += 2;
    }

    giamFont = () => {
        this.fontSize -= 2;
    }



    arrProduct: any[] = [
        { id: 1, name: 'Phone 1', price: 1000, image: 'https://picsum.photos/id/1/200/200' },
        { id: 2, name: 'Phone 2', price: 2000, image: 'https://picsum.photos/id/2/200/200' },
        { id: 3, name: 'Phone 3', price: 3000, image: 'https://picsum.photos/id/3/200/200' },
    ]

    color: string = 'red';

    isLogin: boolean = false;
    userName: string = 'Thong';

    status: Boolean = true;

    number: number = 3;

    constructor() { }

    ngOnInit() { }

    anHien = () => {
        this.status = !this.status;
    }

    changeNumber = (num: string) => {
        this.number = Number(num);
    }

    login = () => {
        this.isLogin = true;
    }

    logout = () => {
        this.isLogin = false;
    }
}