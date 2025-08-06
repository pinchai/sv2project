import {Injectable} from '@angular/core';

declare const axios: any;
declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {
    let vm = this;
    $.LoadingOverlay("show");
    axios.get(this.url)
      .then(function (response: any) {
        // handle success
        vm.products = response.data;
      })
      .catch(function (error: any) {
        // handle error
        console.log(error);
      }).finally(function () {
        $.LoadingOverlay("hide");
    })
  }

  private products: any = [];
  private url: string = 'https://sv-gen-api.bczin2zin2takeo.us/api/product';

  getProducts() {
    return this.products;
  }
}
