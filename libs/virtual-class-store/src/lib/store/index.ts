import { EntityMetadataMap, EntityPluralNames } from '@ngrx/data';

export const entityMetadataMap: EntityMetadataMap = {
  Courses: {
    selectId: c => c.id,
  },
};

export const pluralNames: EntityPluralNames = {
  Courses: 'courses/',
};
