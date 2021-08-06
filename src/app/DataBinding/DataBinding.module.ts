import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//thư viện sử dụng 2waybinding
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './DataBinding.component';
import { RegisterComponent } from './Register.component';


@NgModule({

    declarations: [DataBindingComponent, RegisterComponent],

    imports: [FormsModule, CommonModule],
    exports: [DataBindingComponent, RegisterComponent],
})
export class DataBindingModule { }
