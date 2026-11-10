import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RechercheParEquipe} from './recherche-par-equipe';

describe('RechercheParEquipe', () => {
  let component: RechercheParEquipe;
  let fixture: ComponentFixture<RechercheParEquipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechercheParEquipe],
    }).compileComponents();

    fixture = TestBed.createComponent(RechercheParEquipe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
