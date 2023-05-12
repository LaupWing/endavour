interface ApiResponse {
   artObjects: any[]
   count: number
   countFacets: {
      hasimage: number,
      ondisplay: number
   }
   facets: any[]
}