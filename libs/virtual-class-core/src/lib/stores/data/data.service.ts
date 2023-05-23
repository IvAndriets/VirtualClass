import { HttpClient, HttpParams } from '@angular/common/http';
import {
  DefaultDataService,
  DefaultDataServiceConfig,
  HttpMethods,
  HttpUrlGenerator,
  normalizeRoot,
} from '@ngrx/data';
import { Observable, switchMap } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { RouterStateService } from '../states';

export class DataService<T> extends DefaultDataService<T> {
  override delete404OK = false;

  public constructor(
    private readonly routerState: RouterStateService,
    entityName: string,
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    config?: DefaultDataServiceConfig,
  ) {
    super(entityName, http, httpUrlGenerator, config);
    this.entityUrl = this.entitiesUrl;
  }

  protected override execute(
    method: HttpMethods,
    url: string,
    data?: any, // data, error, or undefined/null
    options?: { params: HttpParams; },
  ): Observable<any> {

    return this.adjustReportUrl(url).pipe(
      switchMap(reportUrlParam => super.execute(method, reportUrlParam, data, options)),
    );

  }

  private adjustReportUrl(url: string): Observable<any> {
    return this.routerState.getParam$('courseId').pipe(
      take(1),
      tap(console.error),
      map(courseId => {
        if (url.includes('courseId')) {
          return url.replace('courseId', courseId);
        }

        return url;
      }),
    );
  }
}
