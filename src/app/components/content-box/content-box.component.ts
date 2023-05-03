import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Content } from 'src/app/interfaces/content.interface';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.scss']
})
export class ContentBoxComponent {
  @Input() content!: Content;
  @Output() emitContentChange = new EventEmitter<Content>();

  isSelected: boolean = false;

  // updates the title color of the app
  onFocus() {
    this.isSelected = !this.isSelected;
    let content = this.content;

    if (!this.isSelected) {
      content = {
        name: "",
        text: "",
        color: "",
      }
    }

    this.emitContentChange.emit(content);
  }

  getContentBorderStyle() {
    if (this.isSelected) {
      return {
        'background-color': '#d9d9d9',
        'border-left': '10px solid ' + this.content.color
      };
    }

    return {
      'border-left': '5px solid ' + this.content.color
    };
  }
}
