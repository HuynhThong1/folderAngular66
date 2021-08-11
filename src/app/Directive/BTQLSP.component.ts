import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-baitap-qlsp',
    template: `
            <div class="card text-left">
              <div class="card-header">
                    Quản lý danh mục sản phẩm
              </div>
              <div class="card-body">
                <p>STT</p>
                <input type="text" class="form-control" [(ngModel)]="sanPham.stt"/>
                <p>Mã Sản Phẩm</p>
                <input type="text" class="form-control" [(ngModel)]="sanPham.ma"/>
                <p>Tên Sản Phẩm</p>
                <input type="text" class="form-control" [(ngModel)]="sanPham.ten"/>
                <p>Giá</p>
                <input type="text" class="form-control" [(ngModel)]="sanPham.gia"/>

                
              </div>
              <div class="card-footer">
                  <button (click)="addSP()" class="btn btn-success">Thêm Sản Phẩm</button>
              </div>
            </div>

            <div class="mt-5 mb-5">
                <table class="table table-striped">
                    <thead>
                        <tr class="bg-dark text-white">
                            <th>STT</th>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Giá SP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let item of arrSP">
                            <td>{{item.stt}}</td>
                            <td>{{item.ma}}</td>
                            <td>{{item.ten}}</td>
                            <td>{{item.gia}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    
    `
})

export class BaiTapQLSPComponent implements OnInit {


    sanPham:SP = {stt: 0, ma: '', ten: '', gia: 0}
    

    arrSP:SP [] = [
        { stt: 1, ma: 'DT', ten: 'Điện Thoại', gia: 1000000,  },
        { stt: 2, ma: 'LT',ten: 'Laptop', gia: 200000, },
        { stt: 3, ma: 'MTB',ten: 'Máy Tính Bảng', gia: 300000, },
    ]



    addSP = () => {
        this.arrSP.push({...this.sanPham})
    }


    constructor() { }

    ngOnInit() { }
}

interface SP {
    stt: number,
    ma: string, 
    ten: string,
    gia: number,
}