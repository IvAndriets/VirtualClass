import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { services } from "./services";
import { DefaultPluralizer, EntityDefinitionService, Pluralizer } from "@ngrx/data";
import { entityMetadataMap, pluralNames } from "./store";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ...services,
  ]
})
export class VirtualClassStoreModule {
  constructor(
    pluralizer: Pluralizer,
    entityDefinitionService: EntityDefinitionService,
  ) {

    entityDefinitionService.registerMetadataMap(entityMetadataMap);
    (pluralizer as DefaultPluralizer).registerPluralNames(pluralNames);

  }
}
