
export const fetchCategories = async () => {
 const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getCategories`)
const data= await res.json()
console.log(data);
}
