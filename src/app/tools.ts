interface valueView  {
    value:string,
    viewValue:string
}

export const KINDS:valueView[] = [
    {value:'Offer Rent', viewValue:'Offer Rent'},
    {value:'Offer Sell', viewValue:'Offer Sell'},
    {value:'Demand Buy', viewValue:'Demand Buy'},
    {value:'Demand Rent', viewValue:'Demand Rent'}
]

export const DEPARTEMENTS:valueView[] = [
    {value:'Tayaret', viewValue:'Tayaret'},
    {value:'Ksar', viewValue:'Offer Sell'},
    {value:'Dar Naim', viewValue:'Dar Naim'},
    {value:'Taveregh Zeina', viewValue:'Tavregh Zeina'},
    {value:'Sebkha', viewValue:'Sebkha'},
    {value:'Elmina', viewValue:'Elmina'},
    {value:'Arafat', viewValue:'Arafat'},
    {value:'Taveregh Zeina', viewValue:'Tavregh Zeina'},
    {value:'Riyadh', viewValue:'Riyadh'}
]


export async function resize(file:any): Promise<string>{

    // Create image and context
    var image = document.createElement("img")
    image.src = URL.createObjectURL(file)

    var canvas = document.createElement("canvas")
    // canvas.hidden=true
    var ctx = canvas.getContext("2d")

    // When image is loaded draw the canvas with image resized

  return await  new Promise(resolve=>{
        image.addEventListener('load', e=>{
            const imw = image.width
            const imh = image.height
            const nheigt = imh/imw*400
    
            canvas.width=400
            canvas.height=nheigt
    
            if(ctx) ctx.drawImage(image, 0, 0, 400, nheigt)

            resolve(canvas.toDataURL())
    
        })
    })
}

export function time(date:any){
    const now = Date.now()
    
    const dif = now - date
    const dif_d = Math.floor(dif/(1000*60*60*24))
    
    const years = Math.floor(dif_d/365)
    const months = Math.floor(dif_d/30)
    const days = dif_d
    
    var string_diff:string=''
    if(years!=0){
        string_diff="سنوات"+years+"منذو"
    }else if(months!=0){
        string_diff="شهر"+months+"منذو"
    }else if(days!=0){
        string_diff="يوم"+days+"منذو"
    }else{
        string_diff="اليوم"
    }

    return string_diff
}