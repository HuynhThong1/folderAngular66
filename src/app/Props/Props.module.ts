import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoPropsComponent } from './DemoProps.components';
import { ProductComponent } from './Product/Product.compenent';
import { ProductListComponent } from './ProductList/ProductList.component';


@NgModule({
    declarations: [DemoPropsComponent, ProductComponent, ProductListComponent],
    imports: [CommonModule],
    exports: [DemoPropsComponent],
})
export class PropsModule { }
