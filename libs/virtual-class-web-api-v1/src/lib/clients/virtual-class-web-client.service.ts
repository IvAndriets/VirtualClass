import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from "@virtual-class-frontend/virtual-class-config";
import { ClientBaseService, ClientOptions } from "@virtual-class-frontend/virtual-class-core";

@Injectable()
export class VirtualClassWebClientService extends ClientBaseService {

  constructor(
    http: HttpClient,
    config: ConfigService,
  ) {
    super(http, config);
  }

  getUserRoles(options: ClientOptions = {}): Observable<string[]> {
    const _options = {
      ...options,
      params: {
        ...options.params,
      },
    };

    return this.get(`/GetAppRoles`, _options);
  }

  getAccounts(options: ClientOptions = {}): Observable<any[]> {
    const _options = {
      ...options,
      params: {
        ...options.params,
      },
    };

    return this.get(`api/users/me/`, _options)
  }

  uploadFiles(courseId: string, lectureId: string, formData: any, options: ClientOptions = {}): Observable<any[]> {
    const _options = {
      ...options,
      params: {
        ...options.params,
      },
    };

    return this.post(`api/courses/${courseId}/lectures/${lectureId}/upload-file/`, formData, options);
  }

  submitHomework( formData: any, options: ClientOptions = {}): Observable<any[]> {
    const _options = {
      ...options,
      params: {
        ...options.params,
      },
    };

    return this.post(`api/homeworks/`, formData, options);
  }

  rateHomework( id: string, formData: any, options: ClientOptions = {}): Observable<any[]> {
    const _options = {
      ...options,
      params: {
        ...options.params,
      },
    };

    return this.post(`api/homeworks/${id}/rate_lab/`, formData, options);
  }
}
