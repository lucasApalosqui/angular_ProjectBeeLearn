import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMenuRodapeComponent } from './component-menu-rodape.component';

describe('ComponentMenuRodapeComponent', () => {
  let component: ComponentMenuRodapeComponent;
  let fixture: ComponentFixture<ComponentMenuRodapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentMenuRodapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentMenuRodapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
