import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bai-tap-layout',
    template: `
        <div class="container-fluid">
            <div class="header text-center"><app-header></app-header></div>
            <div class="row ml-0 mr-0">
                <div class="col-8 content text-center"><app-contents></app-contents></div>
                <div class="col-4 sidebar text-center"><app-sidebar></app-sidebar></div>
            </div>
            <div class="footer text-center"><app-footer></app-footer></div>
        </div>
    `,

    styles: [`
        *{
            padding: 0;
        }
        .header {
            background-color: grey;
            padding: 10%;
            color: white;
            width: 100%;
        }

        .content{
            background-color: yellow;
            padding: 10%;
            color: black;
        }

        .sidebar{
            background-color: green;
            padding: 10%;
            color: white;
        }

        .footer {
            background-color: navy;
            padding: 10%;
            color: white;
        }
    
    `]
})

export class BaiTapLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}