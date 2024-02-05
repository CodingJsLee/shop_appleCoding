import { createSlice } from "@reduxjs/toolkit";


const user = createSlice({
    name: 'user',
    initialState : {name:'kim',age:20},
    //1- state   함수만들기
    reducers : {
        changeName(state) {
            state.name = 'park'
        },
        increase(state){
            state.age += 1
        }


    }
})

export default user;
export let { changeName , increase }  = user.actions
