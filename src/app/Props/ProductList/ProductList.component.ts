import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ProductComponent } from '../Product/Product.compenent';

@Component({
    selector: 'app-product-list',
    template: `
    <h3>Danh sách sản phẩm</h3>
    <div class="row">
        <div class="col-3" *ngFor="let product of products">
            <app-product (eventXemChiTiet)="xemChiTiet($event)" [product]="product"></app-product>
        </div>
    </div>

    <input #idSP class="form-control" />
    <button class="btn btn-outline-success" (click)="viewDetail(idSP.value)" data-toggle="modal" data-target="#productDetail">View Detail</button>
    <button class="mt-5" (click)="changePrice()">Change Price</button>

    
    <!-- Modal -->
    <div class="modal fade" id="productDetail" tabindex="-1" role="dialog" aria-labelledby="productDetail" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{productDetail.name}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                </div>
                <div class="modal-body">
                    <img [src]="productDetail.img" />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>

        
    
    `
})

export class ProductListComponent implements OnInit {


    productDetail: Product = {
        id: 1, name: 'Iphone', price: 1000, img: 'https://picsum.photos/200/200'
    }

    products: Product[] = [
        {
            id: 1, name: 'Iphone', price: 1000, img: 'https://picsum.photos/id/11/200/200'
        },
        {
            id: 2, name: 'Iphone X', price: 1000, img: 'https://picsum.photos/id/22/200/200'
        },
        {
            id: 3, name: 'Iphone Xs', price: 1000, img: 'https://picsum.photos/id/33/200/200'
        }
    ]

    //Dom tới tất cả <app product> đưa vào biến dsTagAppProduct
    @ViewChildren(ProductComponent) dsTagAppProduct!: QueryList<ProductComponent>

    xemChiTiet (dataOutputProduct:any){
        this.productDetail = dataOutputProduct;
    }

    changePrice() {
        this.dsTagAppProduct.forEach((tagProduct:ProductComponent, index) => {

            tagProduct.product.price *= 1.15;
        } )
    }
    
    viewDetail(id:string) {

        let tagCLick:any = this.dsTagAppProduct.find((tagAppProduct:ProductComponent) => tagAppProduct.product.id == Number(id));


        if(tagCLick){
            tagCLick.eventXemChiTiet.emit(tagCLick.product)
        }

    }

    constructor() { }

    ngOnInit() { }
}


interface Product {
    id: number,
    name: string,
    price: number,
    img: string,
}