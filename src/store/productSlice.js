import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// making status object
// maing object freeze so no one can change the status
export const STATUSES=Object.freeze({
    IDLE:'idle',
    ERROR:'ERROR',
    LOADING:'loading'


});
// creating slice
export const productSlice=createSlice(
    {
        name:'product',
        initialState:{
            data:[],
            status:STATUSES.idle,
        },
        reducers:{
            // normal reducer
            // setProducts(state,action){
            //     // we can directly mutate this with the help of createSlice(redux toolkit) ,it does not happens with only redux
            //     // use push method for push our producs to cart
            //     state.data=action.payload;
            // },
            // setStatus(state,action){
            //     // we can directly mutate this with the help of createSlice(redux toolkit) ,it does not happens with only redux
            //     // use push method for push our producs to cart
            //     state.status=action.payload
            // },


            // extraReducers for createAsyncThunk

            
        },
        extraReducers:(builder)=>{
            builder
            .addCase(fetchProducts.pending,(state,action)=>{
                state.status=STATUSES.LOADING
            })
            .addCase(fetchProducts.fulfilled,(state,action)=>{
                state.data=action.payload
                state.status=STATUSES.idle
            })
            .addCase(fetchProducts.rejected,(state,action)=>{
                state.status=STATUSES.ERROR
            })

        }
    }
)

export const{setProducts,setStatus,remove}=productSlice.actions;
export default productSlice.reducer;

export const fetchProducts=createAsyncThunk('/product/fetch',async()=>{

    const res =await fetch('https://fakestoreapi.com/products')
     const data=await res.json()
     return data
})


//  basic thunk

// export const fetchProducts=()=>{
//     return async function fetchProductThunk(dispatch,getState){
//         dispatch(setStatus(STATUSES.LOADING))
//         try{
//             const res =await fetch('https://fakestoreapi.com/products')
//             const data=await res.json()
//             dispatch(setProducts(data))
//          dispatch(setStatus(STATUSES.IDLE))

//         }
//         catch(err){
//             console.log(err)
//              dispatch(setStatus(STATUSES.ERROR))



//         }
//     }
// }
