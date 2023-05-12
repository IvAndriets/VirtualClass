import { Component, OnInit } from "@angular/core";
import { combineLatest, filter, mapTo, Observable, of, take } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { NavigationEnd, Router } from "@angular/router";
import { AppStateService } from "./stores/states";

@Component({
  selector: "virtual-class-frontend-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  ready$!: Observable<boolean>;
  error$!: Observable<HttpErrorResponse | null>;
  title$!: Observable<string>;

  constructor(
    private readonly router: Router,
    private readonly state: AppStateService,
  ) {}

  ngOnInit(): void {

    this.title$ = of('Virtual class');
    this.state.boot();

    this.ready$ = combineLatest([
      // Ensure the application is ready before continuing.
      this.state.ready$(),
      // Ensure there has been a NavigationEnd event before continuing.
      this.router.events.pipe(
        filter((e) => e instanceof NavigationEnd),
        take(1),
      ),
    ]).pipe(
      mapTo(true),
    );

    this.error$ = this.state.getError$();
  }

}
