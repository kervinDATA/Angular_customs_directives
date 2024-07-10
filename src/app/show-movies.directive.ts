import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appShowMovies]',
  standalone: true
})
export class ShowMoviesDirective {
  constructor(private tplRef: TemplateRef<any>, private vcRef: ViewContainerRef) {}

  @Input() set appShowMovies(condition: boolean) {
    if (condition) {
      this.vcRef.createEmbeddedView(this.tplRef);
    } else {
      this.vcRef.clear();
    }
  }
}
