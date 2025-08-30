import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import {  Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  localService = inject(LocaleService)
  currentLocal = signal(inject(LOCALE_ID))

  nameLower = signal('sergio')
  nameUpper = signal('SERGIO')
  fullname = signal('SeRgIo GoMEz')

  customDate = signal(new Date())

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick');
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    });
  });

  changeLocale(locale: AvailableLocale) {
    console.log({ locale });
    this.localService.changeLocale(locale);
  }
}
