import { Component, OnInit } from '@angular/core';
import { AdaccountsModel, MetaModel } from 'src/app/core/models/meta.model';
import { AuthenticationService } from '../../auth/services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  metas: MetaModel[] = [];
  metasShow: MetaModel[] = [];
  adaccounts: AdaccountsModel[] = [];
  isShowDetailAdaccounts = false;
  constructor(
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.authenticationService.getDataMeta().subscribe((response)=>{
      this.metas = response;
      this.metasShow = [];
      for(let i = 0; i < Math.min(10, this.metas.length) ; i++){
        this.metasShow.push(this.metas[i]);
      }
    });
  }

  sumAccountStatus(adaccounts: AdaccountsModel[]){
    let zero = 0;
    let one = 0;
    let two = 0;
    let three = 0;
    let orther = 0;
    adaccounts.forEach((item)=>{
      if(item.account_status === 0){
        zero = zero + 1;
      }
      else if(item.account_status === 1){
        one = one + 1;
      }
      else if(item.account_status === 2){
        two = two + 1;
      }
      else if(item.account_status === 3){
        three = three + 1;
      }
      else{
        orther = orther + 1;
      }
    })
    return `👉⓪: ${zero} 👉①: ${one} 👉②: ${two} 👉③: ${three} 👉#: ${orther}`;
  }

  onShowAdaccount(adaccounts: AdaccountsModel[], user: string){
    this.adaccounts = adaccounts;
    this.isShowDetailAdaccounts = true;
  }

  onChangePage(event: any){
    console.log(event);
    
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;
    this.metasShow = [];
    for(let i = pageIndex * pageSize; i < Math.min((pageIndex + 1) * pageSize, this.metas.length) ; i++){
      this.metasShow.push(this.metas[i]);
    }
  }
}
