import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-actionComponent
import { actionComponent } from '../components/action.component';
//CORE_REFERENCE_IMPORT-whosHiringComponent
import { whosHiringComponent } from '../components/whosHiring.component';
//CORE_REFERENCE_IMPORT-feedComponent
import { feedComponent } from '../components/feed.component';
//CORE_REFERENCE_IMPORT-searchMenuComponent
import { searchMenuComponent } from '../components/searchMenu.component';
//CORE_REFERENCE_IMPORT-discoverMoreComponent
import { discoverMoreComponent } from '../components/discoverMore.component';
//CORE_REFERENCE_IMPORT-leftProfileComponent
import { leftProfileComponent } from '../components/leftProfile.component';
//CORE_REFERENCE_IMPORT-mainContainerComponent
import { mainContainerComponent } from '../components/mainContainer.component';
//CORE_REFERENCE_IMPORT-toolbarComponent
import { toolbarComponent } from '../components/toolbar.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-actionComponent
  actionComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-whosHiringComponent
  whosHiringComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-feedComponent
  feedComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-searchMenuComponent
  searchMenuComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-discoverMoreComponent
  discoverMoreComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-leftProfileComponent
  leftProfileComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-mainContainerComponent
  mainContainerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-toolbarComponent
  toolbarComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'main', component: mainContainerComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
