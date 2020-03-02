import { Component } from '@angular/core';

@Component({
  selector: 'app-components-data-binding',
  templateUrl: './components-data-binding.component.html',
  styleUrls: ['./components-data-binding.component.css']
})
export class ComponentsDataBindingComponent {
  serverElements = [{type: 'server', name: 'Element name', content: 'Element content'}];

  constructor() {}

  onServerCreated(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBluePrintsCreated(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onDoSomeChanges() {
    this.serverElements[0].name = 'Changed';
  }

  onDestroyElement() {
    this.serverElements.splice(0, 1);
  }
}
