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
  selector: 'bh-discoverMore',
  templateUrl: './discoverMore.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class discoverMoreComponent {
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
      this.sd_hbtE6isbtmn6BAkN(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_hbtE6isbtmn6BAkN(bh) {
    try {
      bh = this.sd_fnU6MbxQOF84sGc9(bh);
      //appendnew_next_sd_hbtE6isbtmn6BAkN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hbtE6isbtmn6BAkN');
    }
  }

  //appendnew_flow_discoverMoreComponent_start

  sd_fnU6MbxQOF84sGc9(bh) {
    try {
      //appendnew_next_sd_fnU6MbxQOF84sGc9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fnU6MbxQOF84sGc9');
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
  //appendnew_flow_discoverMoreComponent_Catch
}
