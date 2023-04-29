import { Component } from '@angular/core';
import { Layout, Edge, Node, MiniMapPosition } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-prototype-create',
  templateUrl: './prototype-create.component.html',
  styleUrls: ['./prototype-create.component.scss']
})

export class PrototypeCreateComponent {

  // graph view
  isMinView: boolean = true;
  minView: [number, number] = [0.8 * window.innerWidth, 0.52 * window.innerHeight];
  maxView: [number, number] = [0.8 * window.innerWidth, 0.8 * window.innerHeight];
  view: [number, number] = this.isMinView? this.minView : this.maxView;
  miniMapPosition:MiniMapPosition = MiniMapPosition.UpperLeft;


  // hide-panel-btn
  isPanelHidden: boolean = false;
  togglePanel(): void {
    this.isPanelHidden = !this.isPanelHidden;
    this.isMinView = !this.isMinView;

    if (this.isPanelHidden) {
      setTimeout(() => {
        // Code for hiding/showing panel with animation
        this.view = this.isMinView ? this.minView : this.maxView;
      }, 300);
    } else {
      this.view = this.isMinView ? this.minView : this.maxView;
    }
  }


  // graph data
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

  /*------------------------------- GRAPH FUNCTIONS -------------------- */

  // CREATE NODE
  numOfCustomers: number = 2;
  numOfWarehouses: number = 2;

  createWarehouse(): void {
    this.numOfWarehouses++;

    const newNode: Node = {
      id:'node_' + String(this.nodes.length + 1),
      label: 'W' + String(this.numOfWarehouses)
    };

    this.nodes.push(newNode);
    this.nodes = [...this.nodes];
  }

  createCustomer(): void {
    this.numOfCustomers++;

    const newNode: Node = {
      id:'node_' + String(this.nodes.length + 1),
      label: 'C' + String(this.numOfCustomers)
    };

    this.nodes.push(newNode);
    this.nodes = [...this.nodes];
  }


  // CREATE LINK
  showDialog: boolean = false;
  isSource: boolean = false;
  showNumberDialog: boolean = false;

  sourceNode: string |undefined = "";
  destinationNode: string |undefined = "";
  travelTime: number = 0;

  sourceSelected: boolean = false;
  destinationSelected: boolean = false;
  isTimeSet: boolean = false;


  selectFrom(): void {
    this.showDialog = !this.showDialog;
    this.isSource = true;
    this.showNumberDialog = false;
  }

  selectTo(): void {
    this.showDialog = !this.showDialog;
    this.isSource = false;
    this.showNumberDialog = false;
  }

  selectNode(node: Node): void {
    if (this.isSource) {
      this.sourceNode = node.label;
      this.sourceSelected = true;
    } else {
      this.destinationNode = node.label;
      this.destinationSelected = true;
    }
    this.showDialog = false;
  }


  selectTime(): void {
    this.showNumberDialog = !this.showNumberDialog;
    this.showDialog = false;
  }

  setTime(): void {
    this.showNumberDialog = false;
    this.isTimeSet = true;

    if (this.travelTime > 999) {
      this.travelTime = 999;
    }
  }

  createLink(): void {
    if (this.sourceSelected && this.destinationSelected && this.isTimeSet) {
      const newLink: Edge = {
        id: 'link_' + String(this.links.length + 1),
        label: String(this.travelTime),
        source: String(this.getNodeIdByLabel(String(this.sourceNode))),
        target: String(this.getNodeIdByLabel(String(this.destinationNode)))
      };

      this.links.push(newLink);

      this.sourceNode = "";
      this.sourceSelected = false;

      this.destinationNode = "";
      this.destinationSelected = false;

      this.travelTime = 0;
      this.isTimeSet = false;

      this.links = [...this.links];
    }
  }

  getNodeIdByLabel(label: string): string | null {
    const node = this.nodes.find(n => n.label === label);
    return node ? node.id : null;
  }


  analyzeGraph(): void{

  }

}
