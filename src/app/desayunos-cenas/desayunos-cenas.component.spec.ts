import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesayunosCenasComponent } from './desayunos-cenas.component';

describe('DesayunosCenasComponent', () => {
  let component: DesayunosCenasComponent;
  let fixture: ComponentFixture<DesayunosCenasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesayunosCenasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesayunosCenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
