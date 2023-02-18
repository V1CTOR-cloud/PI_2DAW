import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent {

  @Input() moduleTitle: string = "File System 📁"

}
