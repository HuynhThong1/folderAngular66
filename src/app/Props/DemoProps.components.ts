import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './ProductList/ProductList.component';

@Component({
    selector: 'app-demo-props',
    template: `
        <div class="container">
            <h3 style="font-weight: bold">@input:</h3>
            <app-product-list #tagProductList></app-product-list>
        
            <p id="theP" #tagP>Ahihi</p>


            <button (click)="ViewDom()">DOM</button>

            <div>
                <h3>Thông tin sản phẩm</h3>
                <div class="form-group">
                    <p>Id</p>
                    <input class="form-control" #id/>
                </div>
                <div class="form-group">
                    <p>Name</p>
                    <input class="form-control" #name/>
                </div>
                <div class="form-group">
                    <p>Price</p>
                    <input class="form-control" #price/>
                </div>
                <div class="form-group">
                    <button class="btn btn-success" (click)="addProduct(id.value,name.value,price.value)">Add</button>
                </div>
            </div>
        </div>
    `
})

export class DemoPropsComponent implements OnInit {
    constructor() { }


    @ViewChild('tagP') tagP!:ElementRef;
    @ViewChild('tagProductList') tagProductList!:ProductListComponent;

    ngOnInit() { }

    ViewDom (){
        // let theP = document.getElementById('theP');
        // console.log(theP);

        this.tagP.nativeElement.innerHTML = 'ABC';
        console.log(this.tagProductList);
    }


    addProduct(id:string, name:string, price:string) {
        let product:Product = {id: Number(id), name, price:Number(price), img: `https://picsum.photos/id/${id}/200/200`}

        //truy xuất đến thuộc tính products của tag <app-product-list></app-product-list>
        this.tagProductList.products.push(product);

    }
}

interface Product {
    id: number,
    name: string,
    price: number,
    img: string,
}