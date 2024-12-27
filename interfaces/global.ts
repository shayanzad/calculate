export interface freightQuote{
    origin?:string|number,
    destination?:string|number,
    carType?:number|null,
    loadType?:number|null,
}
export interface sideBarInterFace{
    name?:string,
    path?:string,
    title?:string,
    icon?:string,
    id?:number,
    children?:any[],
}