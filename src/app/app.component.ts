import { Component } from '@angular/core';
import { Content } from './interfaces/content.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basics-project';

  textColor: string = 'black';

  handleColorUpdate(newColor: string) {
    this.textColor = newColor;
  }

  getTitleStyle() {
    return {
      'color': this.textColor,
    };
  }

  dummyContent: Content[] = [
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (1)",
      text: "Pellentesque dui nulla, feugiat vel lacus sed, pellentesque iaculis arcu. Quisque fermentum tortor et massa finibus bibendum. Etiam ut sodales nisi, a vulputate augue. Quisque pharetra volutpat tellus vel pulvinar. Aenean placerat erat in nulla molestie, sed aliquet nunc dictum. Cras porta ut magna in elementum. Aliquam erat ligula, vulputate ac turpis quis, ornare luctus sapien. In a lacus malesuada, luctus mi in, porta enim.",
      color: "blue",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (2)",
      text: "Pellentesque dui nulla, feugiat vel lacus sed, pellentesque iaculis arcu. Quisque fermentum tortor et massa finibus bibendum. Etiam ut sodales nisi, a vulputate augue. Quisque pharetra volutpat tellus vel pulvinar. Aenean placerat erat in nulla molestie, sed aliquet nunc dictum. Cras porta ut magna in elementum. Aliquam erat ligula, vulputate ac turpis quis, ornare luctus sapien. In a lacus malesuada, luctus mi in, porta enim.",
      color: "black",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (3)",
      text: "Pellentesque dui nulla, feugiat vel lacus sed, pellentesque iaculis arcu. Quisque fermentum tortor et massa finibus bibendum. Etiam ut sodales nisi, a vulputate augue. Quisque pharetra volutpat tellus vel pulvinar. Aenean placerat erat in nulla molestie, sed aliquet nunc dictum. Cras porta ut magna in elementum. Aliquam erat ligula, vulputate ac turpis quis, ornare luctus sapien. In a lacus malesuada, luctus mi in, porta enim.",
      color: "red",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. (4)",
      text: "Pellentesque dui nulla, feugiat vel lacus sed, pellentesque iaculis arcu. Quisque fermentum tortor et massa finibus bibendum. Etiam ut sodales nisi, a vulputate augue. Quisque pharetra volutpat tellus vel pulvinar. Aenean placerat erat in nulla molestie, sed aliquet nunc dictum. Cras porta ut magna in elementum. Aliquam erat ligula, vulputate ac turpis quis, ornare luctus sapien. In a lacus malesuada, luctus mi in, porta enim.",
      color: "green",
    }
  ];
}
