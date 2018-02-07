import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SomeSharedDirective } from './directives/some-shared.directive';
import { SomePipePipe } from './pipes/some-pipe.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [SomePipePipe, SomeSharedDirective]
})
export class SharedModule {}
