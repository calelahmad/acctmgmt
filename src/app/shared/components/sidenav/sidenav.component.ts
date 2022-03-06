// src\app\shared\components\sidenav\sidenav.component.ts

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<object>();
  themeColor: 'primary' | 'accent' | 'warn' = 'primary';
  isDark = false;
  constructor(private overlayContainer: OverlayContainer) {}

  ngOnInit(): void {}

  toggleTheme(): void {
    this.isDark = !this.isDark;
    if (this.isDark) {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
    } else {
      this.overlayContainer
        .getContainerElement()
        .classList.remove('dark-theme');
    }
  }

  onSelect(features: { type: string, title: string }) {
    this.featureSelected.emit(
      {
        type: features.type,
        title: features.title
      });
  }
}
