interface BaseType {
   created_at: Date
   updated_at: Date
}

export interface ShopType extends BaseType {
   name: string
   description: string
   id: number
   profile_url: string
   ratings: RatingType[]
   average_rating: number
   ratings_count: number
   products?: ProductType[]
   products_count: number
}

export interface RatingType extends BaseType {
   id: number
   shop_id: number
   user_id: number
   rating: number
}

export interface ProductType extends BaseType {
   id: number
   name: string
   price: number
   shop_id: number
   description: string
   images?: ImageType[]
}

export interface ImageType extends BaseType {
   id: number
   url: string
   product_id: number
   order: number
}