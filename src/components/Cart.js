import { useState } from "react";
import {  Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName,ageIncrease } from "../reduxData/userSlice";
import addCount from '../redux/store';


function Cart() {

    const state = useSelector((state) => state) // redux store 가져와줌
    // console.log(result.cart);
    let dispatch = useDispatch(); // store.js로 요청보내주는 함수임
    console.log(state);
    console.log(state.cart[0]);
     
    return (
        <div>
            <h6>{state.user.name} {state.user.age}의 장바구니</h6>
            <button >버튼</button>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                {
                    state.cart.map((name, idx) =>  
                    <tr key={idx}>
                        <td>{ state.cart[idx].id }</td>
                        <td>{ state.cart[idx].name }</td>
                        <td>{ state.cart[idx].count}</td>
                        <td><button onClick={()=>{
                            dispatch(addCount(1))}  
                            }>
                            +</button>
                        </td>
                    </tr>
                    )        
                }    
                    
                        

                </tbody>
            </Table> 
        </div>
    )
}

export default Cart;