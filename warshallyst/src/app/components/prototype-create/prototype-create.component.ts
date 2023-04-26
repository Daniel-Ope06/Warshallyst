import { Component } from '@angular/core';
import { Layout, Edge, Node, MiniMapPosition } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-prototype-create',
  templateUrl: './prototype-create.component.html',
  styleUrls: ['./prototype-create.component.scss']
})
export class PrototypeCreateComponent {

  view: [number, number] = [1124, 600];
  miniMapPosition:MiniMapPosition = MiniMapPosition.UpperLeft;

  nodes: Node[] = [
    {
      id: 'node_1',
      label: 'W1'
    }, {
      id: 'node_2',
      label: 'C1'
    }, {
      id: 'node_3',
      label: 'C2'
    }, {
      id: 'node_4',
      label: 'W2'
    }
  ];


  links: Edge[] = [
    {
      id: 'link_1',
      source: 'node_1',
    target: 'node_2',
      label: '10'
    }, {
      id: 'link_2',
      source: 'node_1',
      target: 'node_3',
      label: '5'
    }, {
      id: 'link_3',
      source: 'node_2',
      target: 'node_4',
      label: '20'
    }
  ];

}
