import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
export interface BasketState{
    items: Product[],
}
// initial basket
const initialState: BasketState = {
    items: [],
};  
export const BasketSlice=createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state:BasketState,action:PayloadAction<Product>) => {
           
           state.items=[...state.items,action.payload];
        },
        removeFromBasket: (state:BasketState,action:PayloadAction<{_id:string}>) => {
            const index=state.items.findIndex((basketitems)=>basketitems._id===action.payload._id);
            let newBasket=[...state.items];
            if(index>=0){
                newBasket.splice(index,1);
            }else{
                console.log("Can't remove product");
            }
            state.items=newBasket;
        },
      
    },
});

export const { addToBasket, removeFromBasket } = BasketSlice.actions;
export const selectBasketItems  = (state: RootState) => state.basket.items;
export const selectBasketItemsWithId = (state: RootState, id: string) => {
    state.basket.items.filter((item: Product) => item._id === id);
  };
  export const selectBasketTotal = (state: RootState) =>
    state.basket.items.reduce(
      (total: number, item: Product) => (total += item.price),
      0
          ); 
export default BasketSlice.reducer;    
