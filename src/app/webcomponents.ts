import { NgModule, ComponentFactoryResolver, ComponentFactory, Type } from '@angular/core';

export function promoteToWebComponent(appRef: any, componentType: Type<any>): void {
    const injector = appRef._injector;
    const componentFactoryResolver: ComponentFactoryResolver =
      injector.get(ComponentFactoryResolver);
    const componentFactory: ComponentFactory<any> =
      componentFactoryResolver.resolveComponentFactory(componentType);
    const attrToProp = new Map<string, string>()
    if (componentFactory.inputs) {
      componentFactory.inputs.forEach(input => {
        attrToProp.set(input.templateName, input.propName);
      });
    }

    // Create a class for the element
    class PromotedAngularComponent extends HTMLElement {
      private component: any;

      static get observedAttributes() { return Array.from(attrToProp.keys()); }

      constructor() {
        // Always call super first in constructor
        super();

        const componentRef = appRef.bootstrap(componentFactory, this)
        this.component = componentRef.instance;
      }

      attributeChangedCallback(attr, prevValue, currValue) {
        const prop = attrToProp.get(attr);
        appRef._zone.run(() => this.component[prop] = currValue);
      }
    }

    // Define the new element
    customElements.define(componentFactory.selector, PromotedAngularComponent);
}
