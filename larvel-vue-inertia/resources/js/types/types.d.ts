interface ApiIndexResponse {
   artObjects: ArtObjectType[]
   count: number
   countFacets: {
      hasimage: number,
      ondisplay: number
   }
   facets: any[]
}

interface ApiDetailResponse {
   artObject: ArtObjectType
   elapsedMilliseconds: number
   artObjectPage: any
}

interface ImageType {
   guid: string
   height: number
   offsetPercentageX: number
   offsetPercentageY: number
   url: string
   width: number
}

interface ArtObjectType {
   hasImage: boolean
   headerImage: ImageType
   id: string
   links: {
      self: string
      web: string
   }
   longTitle: string
   objectNumber: string
   principalOrFirstMaker: string
   permitDownload: boolean
   productionPlaces: string[]
   showImage: boolean
   title: string
   webImage: ImageType
   [key: string]: any
}