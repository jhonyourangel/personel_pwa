import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-router-links',
  templateUrl: './router-links.component.html',
  styleUrls: ['./router-links.component.css']
})
export class RouterLinksComponent implements OnInit {
  selected = 'home';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('calendar', sanitizer.bypassSecurityTrustResourceUrl('assets/menu-icons/calendar.svg'));
    iconRegistry.addSvgIcon('chart', sanitizer.bypassSecurityTrustResourceUrl('assets/menu-icons/chart.svg'));
    iconRegistry.addSvgIcon('cloud', sanitizer.bypassSecurityTrustResourceUrl('assets/menu-icons/cloud.svg'));
    iconRegistry.addSvgIcon('presentation', sanitizer.bypassSecurityTrustResourceUrl('assets/menu-icons/presentation.svg'));
    iconRegistry.addSvgIcon('logout', sanitizer.bypassSecurityTrustResourceUrl('assets/menu-icons/logout.svg'));

  }

  ngOnInit() {
  }


  setSelected(id: string) {
    this.selected = id;
  }

}
