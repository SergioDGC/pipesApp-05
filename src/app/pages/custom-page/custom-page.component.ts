import {  Component, signal } from '@angular/core';
import { toggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { canFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/heroColor.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';


@Component({
  selector: 'app-custom-page',
  imports: [toggleCasePipe, canFlyPipe, HeroColorPipe, HeroTextColorPipe, TitleCasePipe, HeroCreatorPipe, HeroSortByPipe, HeroFilterPipe],
  templateUrl: './custom-page.component.html',

})
export default class CustomPageComponent {

  name = signal('Sergio Gomez')

  upperCase = signal(true)

  // toggleCase() {
  //   this.upperCase.update(v => !v);
  // }

  heroes = signal(heroes)

  sortBy = signal<keyof Hero | null>(null)

  searchQuery = signal('')


}
