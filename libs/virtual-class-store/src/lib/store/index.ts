import { EntityMetadataMap, EntityPluralNames } from '@ngrx/data';

export const entityMetadataMap: EntityMetadataMap = {
  Courses: {
    selectId: c => c.id,
  },
  Lectures: {
    selectId: c => c.id,
  },
  Comments: {
    selectId: c => c.id,
  },
  Links: {
    selectId: c => c.id,
  },
};

export const pluralNames: EntityPluralNames = {
  Courses: 'courses',
  Lectures: 'courses/courseId/lectures',
  Comments: 'comments',
  Links: 'links',
};
