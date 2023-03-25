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
  adaccounts: AdaccountsModel[] = [];
  isShowDetailAdaccounts = false;
  constructor(
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
    this.authenticationService.getDataMeta().subscribe((response)=>{
      console.log(response);
      this.metas = response;
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
}
