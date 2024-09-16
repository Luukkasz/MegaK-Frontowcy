import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NameDisplayerComponent} from "./name-displayer/name-displayer.component";
import {ParentComponent} from "./parent/parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NameDisplayerComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HelloApp';
}
