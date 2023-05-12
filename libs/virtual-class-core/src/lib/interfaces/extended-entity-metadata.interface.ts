import { ConstructorProvider } from '@angular/core';
import { EntityMetadata } from '@ngrx/data/src/entity-metadata/entity-metadata';

export type ExEntityMetadata = {paramsGenerator: ConstructorProvider } & EntityMetadata<any>;

export interface ExEntityMetadataMap {
  [entityName: string]: Partial<ExEntityMetadata>;
}
