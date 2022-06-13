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
  selector: 'bh-mainContainer',
  templateUrl: './mainContainer.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class mainContainerComponent {
  @ViewChild('sidenav')
  public sidenav: any = null;
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
      this.sd_XQompYv6vBsSqEjw(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_XQompYv6vBsSqEjw(bh) {
    try {
      bh = this.sd_onN1vZulzLAQTYbq(bh);
      //appendnew_next_sd_XQompYv6vBsSqEjw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XQompYv6vBsSqEjw');
    }
  }

  toggleSidNav(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_iiryDhlsfBe15pif(bh);
      //appendnew_next_toggleSidNav
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uij2eSAhMGPnySHu');
    }
  }

  //appendnew_flow_mainContainerComponent_start

  sd_onN1vZulzLAQTYbq(bh) {
    try {
      this.page.icons = [];
      bh = this.addNavbarIconsx(bh);
      //appendnew_next_sd_onN1vZulzLAQTYbq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_onN1vZulzLAQTYbq');
    }
  }

  addNavbarIconsx(bh) {
    try {
      const page = this.page;
      page.icons = [
        {
          icon: 'home',
          name: 'Home',
        },
        {
          icon: 'people',
          name: 'My Network',
        },
        {
          icon: 'work',
          name: 'Job',
        },
        {
          icon: 'message',
          name: 'Messaging',
        },
        {
          icon: 'notifications',
          name: 'Notifications',
        },
      ];
      //appendnew_next_addNavbarIconsx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vQhr7L6Bwny3TJw8');
    }
  }

  sd_iiryDhlsfBe15pif(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        sidenav: this.sidenav,
      });
      bh = this.sd_0aHVWhCi0hGEQ8MY(bh);
      //appendnew_next_sd_iiryDhlsfBe15pif
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iiryDhlsfBe15pif');
    }
  }

  sd_0aHVWhCi0hGEQ8MY(bh) {
    try {
      const page = this.page;
      bh.pageViews.sidenav.toggle();

      //appendnew_next_sd_0aHVWhCi0hGEQ8MY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0aHVWhCi0hGEQ8MY');
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
  //appendnew_flow_mainContainerComponent_Catch
}
