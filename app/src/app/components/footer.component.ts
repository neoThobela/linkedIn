/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-footer',
  templateUrl: './footer.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class footerComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_0bQBl90WL46iCuCe(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_0bQBl90WL46iCuCe(bh) {
    try {
      bh = this.sd_n5SjOERhChuGaIKm(bh);
      //appendnew_next_sd_0bQBl90WL46iCuCe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0bQBl90WL46iCuCe');
    }
  }

  //appendnew_flow_footerComponent_start

  sd_n5SjOERhChuGaIKm(bh) {
    try {
      this.page.footercomp = [];
      bh = this.sd_dsUv7BwFtz3NhKrz(bh);
      //appendnew_next_sd_n5SjOERhChuGaIKm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n5SjOERhChuGaIKm');
    }
  }

  sd_dsUv7BwFtz3NhKrz(bh) {
    try {
      const page = this.page;
      page.footercomp = [
        'About',
        'Accessibility',
        'Help Center',
        'Privacy & Terms',
        'Ad Choices',
        'Advertising',
        'Business Services',
        'Get the LinkedIn app',
        'More',
      ];
      //appendnew_next_sd_dsUv7BwFtz3NhKrz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dsUv7BwFtz3NhKrz');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_footerComponent_Catch
}
