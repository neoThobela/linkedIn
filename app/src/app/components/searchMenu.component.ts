/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ViewChildren,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-searchMenu',
  templateUrl: './searchMenu.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class searchMenuComponent {
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
      this.sd_VftHwbCNUdPRaUVY(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_VftHwbCNUdPRaUVY(bh) {
    try {
      bh = this.sd_He4k7SCBG0nBEs4T(bh);
      //appendnew_next_sd_VftHwbCNUdPRaUVY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VftHwbCNUdPRaUVY');
    }
  }

  //appendnew_flow_searchMenuComponent_start

  sd_He4k7SCBG0nBEs4T(bh) {
    try {
      this.page.searchBarIcons = [];
      bh = this.searchBarIcons(bh);
      //appendnew_next_sd_He4k7SCBG0nBEs4T
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_He4k7SCBG0nBEs4T');
    }
  }

  searchBarIcons(bh) {
    try {
      const page = this.page;
      page.searchBarIcons = [
        {
          icon: 'photo',
          name: 'Photo',
          color: '#378fe9',
        },
        {
          icon: 'video_library',
          name: 'Video',
          color: '#5f9b41',
        },
        {
          icon: 'event',
          name: 'Event',
          color: '#c37d16',
        },
        {
          icon: 'description',
          name: 'Write An Article',
          color: '#e16745',
        },
      ];
      //appendnew_next_searchBarIcons
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_U9BOQgs5TEN67Uw6');
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
  //appendnew_flow_searchMenuComponent_Catch
}
