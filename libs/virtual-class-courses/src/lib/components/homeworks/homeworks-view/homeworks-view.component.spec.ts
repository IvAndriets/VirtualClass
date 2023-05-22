import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeworksViewComponent } from './homeworks-view.component';

describe('HomeworksViewComponent', () => {
  let component: HomeworksViewComponent;
  let fixture: ComponentFixture<HomeworksViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeworksViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeworksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
