import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
    imports: [MatButtonModule, MatIconModule, BrowserAnimationsModule, MatBadgeModule],
    exports: [MatButtonModule, MatIconModule, BrowserAnimationsModule, MatBadgeModule],
})
export class MaterialModule { }
