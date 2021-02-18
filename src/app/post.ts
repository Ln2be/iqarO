export interface Post {
    kind:string,
    departement:string,
    tel:string,
    id?:string,
    description?:string
    images?:string[],
    _id?:string,
    pass?:string,
    name?:string,
    price?:number,
    created_at?:Date
}