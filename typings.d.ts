interface Category {
    _id: string;
    _createdAt:string;
    _updatedAt:string;
    _type:string;
    slug:{
        _type:"slug";
        current:string;
    }
    title:string;

}