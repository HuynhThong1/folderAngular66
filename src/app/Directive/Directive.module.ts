//import commonModule để sử dụng directive
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaiTapLoginComponent } from './BTLogin.component';
import { BaiTapQLSPComponent} from './BTQLSP.component';
import { DirectiveComponent } from './Directive.component';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
    declarations: [DirectiveComponent, BaiTapLoginComponent, BaiTapQLSPComponent],
    imports: [CommonModule, FormsModule, NzButtonModule],
    exports: [DirectiveComponent, BaiTapLoginComponent, BaiTapQLSPComponent],
})
export class DirectiveModule { }
