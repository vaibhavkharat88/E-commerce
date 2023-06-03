import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

export const cartSlice=createSlice(
    {
        name:'cart',
        initialState,
        reducers:{
            add:(state,action)=>{
                // we can directly mutate this with the help of createSlice(redux toolkit) ,it does not happens with only redux
                // use push method for push our producs to cart
                state.push(action.payload)
            },
            remove:(state,action)=>{
                // use filter for remove product from cart
                return state.filter((item)=>item.id!==action.payload)
            }
        }
    }
)
export const{add,remove}=cartSlice.actions;
export default cartSlice.reducer;
