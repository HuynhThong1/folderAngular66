import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-databinding',
    template: `
        <div class="container">

            <h3>1.Oneway binding - interpolation</h3>
            <p>Tieu de {{title}}</p>

            <input value="{{title}}"/>


            <h3>2.Properties binding</h3>
            <div [innerHTML] = "title"></div>
            <input [value]="title"/>

            <h3>3.Event binding</h3>
            <input #inputTitle/> <br/>
            <button class="btn btn-outline-success" (click)="changeTitle(inputTitle.value)">Change title</button>

            <hr />
            <h1> TWOWAY BINDING </h1>
            
            <input [(ngModel)] = "title"/>

            <hr/>

            <table class="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                        <th></th>
                    </tr> 
                </thead>
                <tbody>
                    <tr *ngFor="let product of arrProduct">
                        <td>{{product.id}}</td>
                        <td>{{product.name}}</td>
                        <td>{{product.price}}</td>
                        <td><input class="form-control" [(ngModel)]="product.quantity"></td>
                        <td>{{product.price * product.quantity}}</td>
                    </tr>
                </tbody>

            </table>

        </div>
    
    `
})

export class DataBindingComponent implements OnInit {

    //Tất cả các dữ liệu hiển thị trên giao diện đều phải quản lý bởi thuộc tính của model

    title:string = 'hello Thong';

    arrProduct:Product[] =[
        {id:`1`, name: `Iphone`, price: 1000, quantity: 10},
        {id:`2`, name: `Iphone X`, price: 2000, quantity: 20},
        {id:`3`, name: `Iphone Xs`, price: 3000, quantity: 30},
    ]
        

    changeTitle = (newTitle:string) => {
        this.title = newTitle;
    }

    constructor() { }

    ngOnInit() { }
}


interface Product {
    id: string,
    name: string, 
    price: number,
    quantity: number
}