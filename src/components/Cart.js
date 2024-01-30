import { useState } from "react";
import {  Table } from "react-bootstrap";
import { useSelector } from "react-redux";




function Cart() {

    let result = useSelector((state) => state) // redux store 가져와줌
    console.log(result.cart);

    
    return (
        <div>
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
                    result.cart.map((name, idx) =>  
                    <tr>
                        <td>{ result.cart[idx].id }</td>
                        <td>{ result.cart[idx].name }</td>
                        <td>{ result.cart[idx].count}</td>
                        <td><button>버튼</button></td>
                    </tr>
                    )        
                }    
                    
                        

                </tbody>
            </Table> 
        </div>
    )
}

export default Cart;