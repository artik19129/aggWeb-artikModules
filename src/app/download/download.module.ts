import { DownloadRoutingModule } from './download-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadComponent } from './pages/download/download.component';

@NgModule({
  imports: [
    CommonModule,
    DownloadRoutingModule
  ],
  declarations: [DownloadComponent]
})
export class DownloadModule { }
