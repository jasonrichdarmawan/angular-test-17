import { Component } from '@angular/core';
import { LogPipe } from '../../pipes/log/log.pipe';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [
    LogPipe,
  ],
  templateUrl: './desktop.page.html',
  styleUrl: './desktop.page.scss'
})
export class DesktopPage {

}
