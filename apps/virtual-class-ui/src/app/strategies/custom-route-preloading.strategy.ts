/* eslint-disable  @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class CustomRoutePreloadingStrategy implements PreloadingStrategy {

  preload(route: Route, load: () => any): Observable<any> {
    return route.data && route.data['preload'] ? load() : of(null);
  }

}
