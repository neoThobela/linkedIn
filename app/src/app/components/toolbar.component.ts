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
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-toolbar',
  templateUrl: './toolbar.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class toolbarComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_irsyUknMlQH5gtp6(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_irsyUknMlQH5gtp6(bh) {
    try {
      bh = this.sd_KJQVWkzk2CYT5xZg(bh);
      //appendnew_next_sd_irsyUknMlQH5gtp6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_irsyUknMlQH5gtp6');
    }
  }

  //appendnew_flow_toolbarComponent_start

  sd_KJQVWkzk2CYT5xZg(bh) {
    try {
      this.page.icons = [];
      bh = this.addNavbarIconsx(bh);
      //appendnew_next_sd_KJQVWkzk2CYT5xZg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KJQVWkzk2CYT5xZg');
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
      return this.errorHandler(bh, e, 'sd_uNzAsBSgRKnKkEJN');
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
  //appendnew_flow_toolbarComponent_Catch
}
