import { Component } from '@angular/core';
import { LogPipe } from '../../pipes/log/log.pipe';

@Component({
  selector: 'app-mobile',
  standalone: true,
  imports: [
    LogPipe,
  ],
  templateUrl: './mobile.page.html',
  styleUrl: './mobile.page.scss'
})
export class MobilePage {

}
