import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Content } from 'src/app/interfaces/content.interface';

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.scss']
})
export class ContentBoxComponent {
  @Input() content!: Content;
  @Output() emitColorUpdate = new EventEmitter<string>();

  isSelected: boolean = false;

  // updates the title color of the app
  onButtonPress() {
    this.isSelected = !this.isSelected;
    let color = this.content.color;

    if (!this.isSelected) {
      color = 'black';
    }

    this.emitColorUpdate.emit(color);
  }

  // when we lose focus of all content boxes, we default to black color
  onLoseFocus() {
    if (this.isSelected) {
      this.isSelected = !this.isSelected;
      let color = 'black';

      this.emitColorUpdate.emit(color);
    }
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
