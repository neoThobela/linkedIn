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
  selector: 'bh-action',
  templateUrl: './action.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class actionComponent {
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
      this.sd_N5A5c71WjVJomr3m(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_N5A5c71WjVJomr3m(bh) {
    try {
      bh = this.sd_cD9SScH9TCrz2RA6(bh);
      //appendnew_next_sd_N5A5c71WjVJomr3m
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_N5A5c71WjVJomr3m');
    }
  }

  //appendnew_flow_actionComponent_start

  sd_cD9SScH9TCrz2RA6(bh) {
    try {
      this.page.actionsComp = [];
      bh = this.sd_2NX19duFOG3alSFV(bh);
      //appendnew_next_sd_cD9SScH9TCrz2RA6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cD9SScH9TCrz2RA6');
    }
  }

  sd_2NX19duFOG3alSFV(bh) {
    try {
      const page = this.page;
      page.actionsComp = [
        {
          friendLike: 'RIVALANI BALOYI',
          name: 'Tems Smith',
          position: 'SoftWare Engineer',
          profilePicture: '/Web/Images/post.jpg',
          image: '/Web/Images/post.jpg',
          postMessage:
            'Today’s trends of digitization, Industry 4.0 and supply chain resilience force companies to rethink the way they design their supply chains',
        },
        {
          friendLike: 'Motlatso Mokoele ',
          name: 'Lerato M. Sebothoma, MSc.',
          position: 'Construction Project Management',
          profilePicture: '/Web/Images/post.jpg',
          image: '/Web/Images/picturePost.jpg',
          postMessage:
            'Incredible day spent at the 5th #ConstructionTechnologyFestival and Awards with fellow CIOB member Haitham Aref, MSc, FCIOB and Regional Manager Matt Doran 😀🎉',
        },
        {
          friendLike: 'Thapelo Gift ',
          name: 'Lerato Mashaba',
          position: 'Bcom marketing management graduate',
          profilePicture: '/Web/Images/post.jpg',
          image: '/Web/Images/picturePost2.jpg',
          postMessage: 'Degree obtained 🎓',
        },
      ];
      //appendnew_next_sd_2NX19duFOG3alSFV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2NX19duFOG3alSFV');
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
  //appendnew_flow_actionComponent_Catch
}
