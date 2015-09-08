/// <reference path="kubernetesApiPlugin.d.ts" />
/// <reference path="kubernetesModel.d.ts" />
declare module KubernetesAPI {
    class ServiceRegistryService {
        private model;
        hasService(serviceName: string): boolean;
        findService(serviceName: string): any;
        serviceLink(serviceName: string): string;
        private getModel();
    }
}