
export const fetchCategories = async () => {
    console.log("url",process.env.NEXT_PUBLIC_API_URL);
 const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getCategories`)
 const data = await res.json();
 const categories: Category[] = data.categories;

 return categories;
}
