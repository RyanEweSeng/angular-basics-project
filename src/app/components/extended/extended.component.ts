import { Component, Input } from '@angular/core';
import { Content } from 'src/app/interfaces/content.interface';

@Component({
  selector: 'app-extended',
  templateUrl: './extended.component.html',
  styleUrls: ['./extended.component.scss']
})
export class ExtendedComponent {
  @Input() content!: Content;

}
