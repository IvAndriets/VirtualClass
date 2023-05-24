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
  Homeworks: {
    selectId: c => c.id,
  },
};

export const pluralNames: EntityPluralNames = {
  Courses: 'courses',
  Lectures: 'courses/course_id/lectures',
  Comments: 'comments',
  Links: 'links',
  Homeworks: 'homeworks',
};
