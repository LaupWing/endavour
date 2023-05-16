import type { Page, PageProps } from "@inertiajs/core"
import { AxiosInstance } from "axios"
import ziggyRoute, { Config as ZiggyRoute} from "ziggy-js"

declare global {
   interface Window {
      axios: AxiosInstance
   }

   var route: typeof ziggyRoute
   var Ziggy: ZiggyRoute
}

declare module "vue" {
   interface ComponentCustomProperties {
      route: typeof ziggyRoute;
   }
}

declare module "@inertiajs/core" {
   interface PageProps extends Page<PageProps> {
      user: inertia.User
      jetstream: inertia.Jetstream
      errors: inertia.Errors
      errorBags: inertia.ErrorBags
      flash: inertia.Flash
   }
}

declare module "@inertiajs/vue3" {
   export function usePage<T extends PageProps>(): Page<T>
}