import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "template-binding",
        loadComponent: () => import("./template-binding/template-binding.component").then((m) => m.TemplateBindingComponent),
        title : 'Template Binding'
    },
    {
        path: "native-binding",
        loadComponent: () => import("./native-binding/native-binding.component").then((m) => m.NativeBindingComponent),
        title : 'Native Binding'
    },
    {
        path: "form-event",
        loadComponent: () => import("./form-event/form-event.component").then((m) => m.FormEventComponent),
        title : 'From Event'
    },
    {
        path: "host-listener",
        loadComponent: () => import("./host-listener/host-listener.component").then((m) => m.HostListenerComponent),
        title : 'Host Listener'
    },
    {
        path : '',
        redirectTo : '/template-binding',
        pathMatch : 'full'
    }
];
