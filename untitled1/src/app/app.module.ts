import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbAutocompleteModule } from 'mdb-angular-ui-kit/autocomplete';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbChartModule } from 'mdb-angular-ui-kit/charts';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDatepickerModule } from 'mdb-angular-ui-kit/datepicker';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbInfiniteScrollModule } from 'mdb-angular-ui-kit/infinite-scroll';
import { MdbLazyLoadingModule } from 'mdb-angular-ui-kit/lazy-loading';
import { MdbLightboxModule } from 'mdb-angular-ui-kit/lightbox';
import { MdbLoadingModule } from 'mdb-angular-ui-kit/loading';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbNotificationModule } from 'mdb-angular-ui-kit/notification';
import { MdbPopconfirmModule } from 'mdb-angular-ui-kit/popconfirm';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRatingModule } from 'mdb-angular-ui-kit/rating';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollbarModule } from 'mdb-angular-ui-kit/scrollbar';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbSelectModule } from 'mdb-angular-ui-kit/select';
import { MdbSidenavModule } from 'mdb-angular-ui-kit/sidenav';
import { MdbSmoothScrollModule } from 'mdb-angular-ui-kit/smooth-scroll';
import { MdbStepperModule } from 'mdb-angular-ui-kit/stepper';
import { MdbStickyModule } from 'mdb-angular-ui-kit/sticky';
import { MdbTableModule } from 'mdb-angular-ui-kit/table';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTimepickerModule } from 'mdb-angular-ui-kit/timepicker';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { MdbCalendarModule } from 'mdb-angular-calendar';
import { MdbWysiwygModule } from 'mdb-angular-wysiwyg';
import { MdbDragAndDropModule } from 'mdb-angular-drag-and-drop';
import { MdbVectorMapModule } from 'mdb-angular-vector-maps';
import { MdbFileUploadModule } from 'mdb-angular-file-upload';
import { MdbTreeviewModule } from 'mdb-angular-treeview';
import { MdbTransferModule } from 'mdb-angular-transfer';
import { MdbMentionModule } from 'mdb-angular-mention';
import { MdbCookiesManagementService } from 'mdb-angular-cookies-management';
import { MdbStorageManagementService } from 'mdb-angular-storage-management';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {OwlModule} from "ngx-owl-carousel";
import { SinglePageComponent } from './single-page/single-page.component';
import {AppRoutingModule} from "./app-routing.module";
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';


@NgModule({
  declarations: [AppComponent, HomeComponent, SinglePageComponent, ContactUsComponent, NextDirective, PrevDirective],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbAutocompleteModule,
    MdbCarouselModule,
    MdbChartModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDatepickerModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbInfiniteScrollModule,
    MdbLazyLoadingModule,
    MdbLightboxModule,
    MdbLoadingModule,
    MdbModalModule,
    MdbNotificationModule,
    MdbPopconfirmModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRatingModule,
    MdbRippleModule,
    MdbScrollbarModule,
    MdbScrollspyModule,
    MdbSelectModule,
    MdbSidenavModule,
    MdbSmoothScrollModule,
    MdbStepperModule,
    MdbStickyModule,
    MdbTableModule,
    MdbTabsModule,
    MdbTimepickerModule,
    MdbTooltipModule,
    MdbValidationModule,
    MdbCalendarModule,
    MdbWysiwygModule,
    MdbDragAndDropModule,
    MdbVectorMapModule,
    MdbFileUploadModule,
    MdbTreeviewModule,
    MdbTransferModule,
    MdbMentionModule,
    RouterModule,
    OwlModule,
    AppRoutingModule
  ],
  providers: [MdbCookiesManagementService, MdbStorageManagementService],
  bootstrap: [AppComponent],
})
export class AppModule {}
