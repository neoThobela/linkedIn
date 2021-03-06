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
  selector: 'bh-feed',
  templateUrl: './feed.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class feedComponent {
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
      this.sd_F76qXEdul6K4QV1N(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_F76qXEdul6K4QV1N(bh) {
    try {
      bh = this.addToYourFeed(bh);
      //appendnew_next_sd_F76qXEdul6K4QV1N
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F76qXEdul6K4QV1N');
    }
  }

  //appendnew_flow_feedComponent_start

  addToYourFeed(bh) {
    try {
      this.page.addFeed = [];
      bh = this.sd_88fNBvWZSLA3QBbn(bh);
      //appendnew_next_addToYourFeed
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ucovGtrEdrsvq5XR');
    }
  }

  sd_88fNBvWZSLA3QBbn(bh) {
    try {
      const page = this.page;
      page.addFeed = [
        {
          image: '/Web/Images/profilePicture.jpg',
          title: 'BoxFusion',
          text: 'Company * Tech and Science',
        },
        {
          image: '/Web/Images/profilePicture.jpg',
          title: 'BoxFusion',
          text: 'Company * Tech and Science',
        },
        {
          image: '/Web/Images/profilePicture.jpg',
          title: 'BoxFusion',
          text: 'Company * Tech and Science',
        },
      ];
      //appendnew_next_sd_88fNBvWZSLA3QBbn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_88fNBvWZSLA3QBbn');
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
  //appendnew_flow_feedComponent_Catch
}
