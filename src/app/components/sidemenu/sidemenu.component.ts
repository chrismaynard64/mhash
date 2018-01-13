import { Component, OnInit, Input } from '@angular/core';
import { PanelBarItemModel } from "@progress/kendo-angular-layout/dist/es/panelbar/panelbar-item-model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

   @Input() show: boolean = false;
   private selectedId: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  display() {
    this.show = true;
  }

  hide() {
    this.show = false;
  }

  toggle() {
    this.show = !this.show;
  }

  public stateChange(data: Array<PanelBarItemModel>): boolean {
    let focusedEvent: PanelBarItemModel = data.filter(item => item.focused === true)[0];

    if (focusedEvent.id !== "info") {
       this.selectedId = focusedEvent.id;
       this.router.navigate(["/" + focusedEvent.id]);
    }

    return false;
}

}
