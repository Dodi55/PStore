type Specifications = {
    header: string;
    descriptionSpecific: [string, string]
}

type Product  = {
    id: number ;//1
    title: string;//Iphone 14 Pro
    price: number;//100000
    beforePrice: number;//120000
    additionally: {
        description: string[];// TEXT
        specifications: Specifications[]
    }
    isActive: boolean
}