import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavSpriteModule } from 'ng-devui/nav-sprite';
import { ReadTipModule } from 'ng-devui/read-tip';
import { SafePipeModule } from 'ng-devui/utils';
import { CodeCopyModule } from '../../../devui-commons/src/codecopy/codecopy.module';
import { DevUIApiComponent } from './devui-api.component';

@NgModule({
  imports: [CommonModule, SafePipeModule, NavSpriteModule, ReadTipModule, CodeCopyModule],
  declarations: [DevUIApiComponent],
  exports: [DevUIApiComponent],
})
export class DevUIApiModule {}
