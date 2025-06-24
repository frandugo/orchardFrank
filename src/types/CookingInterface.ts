export interface ContentfulImage {
    url: string;
    title?: string;
    description?: string;
    width?: number;
    height?: number;
    contentType?: string;
}

export interface CookingInterface {
    title: string
    info: string
    imgCollection: { 
        items: ContentfulImage[]
    };
}

export interface CookingArrayInterface { 
    items: CookingInterface[] 
}

export interface CookingPostInterface {
    title: string
    description: {
        json: unknown
    }
    image: ContentfulImage
}

export interface CookingPostArrayInterface { 
    items: CookingPostInterface[] 
}

