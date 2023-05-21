import { DefaultDataServiceConfig } from '@ngrx/data';
import { ConfigService } from "@virtual-class-frontend/virtual-class-config";

export const dataServiceConfigFactory = (config: ConfigService): DefaultDataServiceConfig => {

  return {
    root: `${config.getEnvironment().api_url}api/`,
    entityHttpResourceUrls: {
      Lectures: {
        entityResourceUrl: `${config.getEnvironment().api_url}api/courses/courseId/lectures/`,
        collectionResourceUrl: `${config.getEnvironment().api_url}api/courses/courseId/lectures/`,
      },
    }
  };

};
