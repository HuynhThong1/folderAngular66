import { Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductListComponent } from '../ProductList/ProductList.component';

@Component({
    selector: 'app-product',
    template: `
        <div class="card">
            <img class="w-full" [src]="product.img"> 
            <div class='card-body'>
                <p>{{product.name}}</p>
                <p>{{product.price}}</p>


                <button class="btn btn-outline-danger" data-toggle="modal" data-target="#productDetail" (click)="xemChiTiet()">Xem chi tiết</button>

                <button class="btn btn-danger" (click)="deleteProduct(product.id)">Delete</button>
            </div>
        </div>

    `
})

export class ProductComponent implements OnInit {


    @Input() product!:Product;

    //Thuộc tính này dùng để dưa dữ liệu ra component cha
    @Output() eventXemChiTiet = new EventEmitter();

    

    @ViewChildren(ProductListComponent) productList!: QueryList<ProductListComponent>

    xemChiTiet () {
        this.eventXemChiTiet.emit(this.product);
    }

    deleteProduct (id:Number) {

        
    }

    constructor() { }

    ngOnInit() { }
}


interface Product {
    id:number, 
    name:string,
    price:number,
    img:string,
}