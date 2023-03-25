import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    DxAccordionModule, DxAutocompleteModule, DxButtonModule, DxMenuModule,
    DxChartModule, DxCheckBoxModule, DxColorBoxModule, DxToolbarModule,
    DxContextMenuModule, DxDataGridModule, DxDateBoxModule, DxDropDownBoxModule,
    DxDropDownButtonModule, DxFileUploaderModule, DxFormModule,
    DxHtmlEditorModule, DxListModule, DxLoadIndicatorModule, DxLoadPanelModule,
    DxNumberBoxModule, DxPivotGridModule, DxPopoverModule,
    DxPopupModule, DxProgressBarModule, DxRadioGroupModule, DxSchedulerModule,
    DxScrollViewModule, DxSelectBoxModule, DxSliderModule, DxSwitchModule,
    DxTabPanelModule, DxTabsModule, DxTagBoxModule,
    DxTextAreaModule, DxTextBoxModule, DxTooltipModule, DxTreeListModule, DxTreeViewModule,
    DxValidationGroupModule, DxValidationSummaryModule, DxValidatorModule, DxDrawerModule, DxLookupModule,
    DxPieChartModule,
    DxCalendarModule,
    DxTemplateModule,
} from 'devextreme-angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
// import { NzAffixModule } from 'ng-zorro-antd/affix';


//
const DEVEXTREME_MODULES = [
    DxButtonModule, DxDropDownButtonModule, DxDrawerModule, DxMenuModule,
    DxToolbarModule, DxTextBoxModule, DxScrollViewModule, DxListModule, DxDataGridModule,
    DxTagBoxModule, DxValidatorModule, DxValidationGroupModule, DxValidationSummaryModule,
    DxCheckBoxModule, DxPopupModule, DxPopoverModule, DxTabPanelModule, DxTreeListModule,
    DxTextAreaModule, DxSelectBoxModule, DxDateBoxModule, DxChartModule, DxContextMenuModule,
    DxFormModule, DxSliderModule, DxNumberBoxModule, DxHtmlEditorModule, DxSchedulerModule,
    DxFileUploaderModule, DxAccordionModule, DxSwitchModule, DxPivotGridModule, DxTabsModule, DxLoadIndicatorModule,
    DxLoadPanelModule, DxTooltipModule, DxProgressBarModule, DxColorBoxModule,
    DxDropDownBoxModule, DxTreeViewModule, DxRadioGroupModule, DxAutocompleteModule, DxLookupModule, DxPieChartModule,DxCalendarModule,
    DxTemplateModule,
];
// 
// const ZORRO_MODULES = [
//     NzAffixModule,
//     NzAlertModule,
//     NzAnchorModule,
//     NzAutocompleteModule,
//     NzAvatarModule,
//     NzBackTopModule,
//     NzBadgeModule,
//     NzButtonModule,
//     NzBreadCrumbModule,
//     NzCalendarModule,
//     NzCardModule,
//     NzCarouselModule,
//     NzCascaderModule,
//     NzCheckboxModule,
//     NzCollapseModule,
//     NzCommentModule,
//     NzDatePickerModule,
//     NzDescriptionsModule,
//     NzDividerModule,
//     NzDrawerModule,
//     NzDropDownModule,
//     NzEmptyModule,
//     NzFormModule,
//     NzGridModule,
//     NzI18nModule,
//     NzIconModule,
//     NzInputModule,
//     NzInputNumberModule,
//     NzLayoutModule,
//     NzListModule,
//     NzMentionModule,
//     NzMenuModule,
//     NzMessageModule,
//     NzModalModule,
//     NzNoAnimationModule,
//     NzNotificationModule,
//     NzPageHeaderModule,
//     NzPaginationModule,
//     NzPopconfirmModule,
//     NzPopoverModule,
//     NzProgressModule,
//     NzRadioModule,
//     NzRateModule,
//     NzResultModule,
//     NzSelectModule,
//     NzSkeletonModule,
//     NzSliderModule,
//     NzSpinModule,
//     NzStatisticModule,
//     NzStepsModule,
//     NzSwitchModule,
//     NzTableModule,
//     NzTabsModule,
//     NzTagModule,
//     NzTimePickerModule,
//     NzTimelineModule,
//     NzToolTipModule,
//     NzTransButtonModule,
//     NzTransferModule,
//     NzTreeModule,
//     NzTreeSelectModule,
//     NzTypographyModule,
//     NzUploadModule,
//     NzWaveModule,
//     NzResizableModule,
//     NzPipesModule,
// ]
//
const BASE_MODULES = [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
];

// Components for this module only
const COMPONENTS: never[] = [
];

//
const DIRECTIVES: never[] = [
];
//
const PIPES: never[] = [];

@NgModule({
    imports: [
        ...DEVEXTREME_MODULES,
        ...BASE_MODULES
    ],
    declarations: [
        ...DIRECTIVES,
        ...PIPES,
        ...COMPONENTS,
    ],
    exports: [
        ...DEVEXTREME_MODULES,
        ...BASE_MODULES,
        ...DIRECTIVES,
        ...PIPES,
        ...COMPONENTS
    ]
})
export class ThemeModule {
}
