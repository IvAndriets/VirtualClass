import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { RouterModule } from "@angular/router";
import { routes } from "./virtual-class-account.route";
import { entityMetadataMap, pluralNames, VirtualClassStoreModule } from "@virtual-class-frontend/virtual-class-store";
import { DefaultPluralizer, EntityDefinitionService, Pluralizer } from "@ngrx/data";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    VirtualClassStoreModule,
  ],
  declarations: [
    LandingComponent,
  ],
})
export class VirtualClassAccountModule {
  constructor(
    pluralizer: Pluralizer,
    entityDefinitionService: EntityDefinitionService,
  ) {

    entityDefinitionService.registerMetadataMap(entityMetadataMap);
    (pluralizer as DefaultPluralizer).registerPluralNames(pluralNames);

  }
}
