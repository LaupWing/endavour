export {}
declare global {
   export namespace inertia {
      export interface User {
         id: number
         email: string
         created_at: Date
         updated_at: Date
         name: string
      }
   
      export interface Jetstream {
         [key: string]: boolean
      }
   
      export type ErrorBags = undefined | { [key: string]: string[] }
   
      export type Errors = undefined | string[]
   
      export type Flash = {
         message: undefined | string
         success: undefined | string
         error: undefined | string[]
      } 
   }
}