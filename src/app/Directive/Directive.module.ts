//import commonModule để sử dụng directive
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaiTapLoginComponent } from './BTLogin.component';
import { BaiTapQLSPComponent} from './BTQLSP.component';
import { DirectiveComponent } from './Directive.component';
import { AntModule } from '../_core/Shared/Antd/Antd.module';
import { MaterialModule } from '../_core/Shared/Material/Material.module';



@NgModule({
    declarations: [DirectiveComponent, BaiTapLoginComponent, BaiTapQLSPComponent],
    imports: [CommonModule, FormsModule, AntModule, MaterialModule],
    exports: [DirectiveComponent, BaiTapLoginComponent, BaiTapQLSPComponent],
})
export class DirectiveModule { }
