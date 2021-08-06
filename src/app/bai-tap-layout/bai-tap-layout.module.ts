import { NgModule } from '@angular/core';
import { BaiTapLayoutComponent } from './bai-tap-layout.component';
import { ContentsComponent } from './contents/contents.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
    declarations: [
        BaiTapLayoutComponent,
        HeaderComponent,
        ContentsComponent,
        SidebarComponent,
        FooterComponent,
    ], //Khai báo các component thuộc module này
    imports: [], // gắn các module khác vào module này
    exports: [BaiTapLayoutComponent], // trích xuất ra component hoặc những thành phần khác của angular cho người khác import vào sử dụng
    providers: [],
})
export class BaiTapLayoutModule { }
