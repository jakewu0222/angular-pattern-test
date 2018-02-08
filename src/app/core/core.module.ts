import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AuthorizationService } from '../middleware/authorization/authorization.service';
import { SomeCoreDirective } from './directives/some-core.directive';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationService } from './navigation/navigation.service';
import { SomePipePipe } from './pipes/some-pipe.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [SomeCoreDirective, NavigationComponent, SomePipePipe]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [AuthorizationService, NavigationService]
    };
  }
}
