import { Component, Input } from '@angular/core';
import { Content } from 'src/app/interfaces/content.interface';

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.scss']
})
export class ContentBoxComponent {
  @Input() content!: Content;

  isSelected: boolean = false;

  toggleBorder() {
    this.isSelected = !this.isSelected;
  }

  getContentBorderStyle() {
    if (this.isSelected) {
      return {
        'border': '2px solid ' + this.content.color,
        'box-shadow':'5px 5px 0px ' + this.content.color,
      };
    }

    return {
      'border': '2px solid transparent',
      'box-shadow':'5px 5px 0px transparent',
    };
  }

  getButtonStyle() {
    return {
      'background-color': this.content.color,
    }
  }
}
