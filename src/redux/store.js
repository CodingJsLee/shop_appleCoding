import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from '../reduxData/userSlice';

const stock = createSlice({
    name: 'stock',
    initialState : [10,11,12]
})

// [
//   {id : 0, name : 'White and Black', count : 2},
//   {id : 2, name : 'Grey Yordan', count : 1}
// ]

let cart = createSlice({
    name : 'cart',
    initialState : [
      {id : 0, name : 'White and Black', count : 2,price:9999},
      {id : 2, name : 'Grey Yordan', count : 1,price:111}
    ],
    reducers : {
      addCount(state, action){
        // console.log(action.payload);

        

            let 번호 =state.findIndex((a) =>{
                // console.log(a.id);
                return a.id === action.payload
            })
            console.log(번호);
            state[번호].count++;
        // state.map((name, id)=>{

            // if(state[id].id == action.payload){
            //     // console.log('야호',state[id].id,id, action.payload);
            //     state[id].count++;
            // }
        // });


        //state[].count++
      },
      addItem(state, action){
        // console.log(action.payload);
        const tmpArr = action.payload;
        const check = state.find((item) => item.id === tmpArr.id);
        if(!check){
            console.log('로직수행');
            state.push(tmpArr);
            state.map((a,i)=>{
                console.log(state[i].price);
            })
        }
        



      }
    }
  })

  export let { addCount,addItem }  = cart.actions

export default configureStore({
    reducer: { 
        user: user.reducer,
        stock: stock.reducer,
        cart: cart.reducer,
    }
}) 
