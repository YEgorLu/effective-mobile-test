import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export class LetContext<T = unknown> {
  constructor(private readonly dir: NgLetDirective<T>) {}

  get ngLet(): T {
    return this.dir.ngLet;
  }
}

@Directive({
  selector: '[ngLet]',
})
export class NgLetDirective<T = unknown> {
  @Input()
  ngLet!: T;

  constructor(
    viewContainer: ViewContainerRef,
    templateRef: TemplateRef<LetContext<T>>
  ) {
    viewContainer.createEmbeddedView(templateRef, new LetContext<T>(this));
  }

  static ngTemplateContextGuard<P>(
    dir: NgLetDirective<P>,
    ctx: unknown
  ): ctx is LetContext<P> {
    return true;
  }
}
