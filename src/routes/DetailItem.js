
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';



function DetailItem(props) {
    let { id } = useParams();
    let [count, setCount] = useState(0);
    let [twoSecondModalSwitch, setTwoSecondModalSwitch] = useState(false);
    const mainData = [...props.mainDisplayData];
    const fixedId = mainData.find((element) => element.id == id);
    // 언제 씀? : 실행시점이 약간 다르다. 렌더링 후 실행됨
    useEffect(() => {
        let a = setTimeout(() => { setTwoSecondModalSwitch(true) }, 2000);
        return () => { // clean up function이라는 별명을 가짐.
            clearTimeout(a);
        }
    },[]);
    function onlyNum(e) {
        let numbers = parseInt(e);
        console.log(numbers);
        if (isNaN(numbers)) {
            console.log("그러지 마세요.")
        } 
            
    }

    return(
    <div className="container">
            {
                twoSecondModalSwitch == false ? <TwoSecondModal/> : null
            }
            {count}
            <button onClick={()=>{ setCount(count+1) }}>버튼</button>
        <div className="row">
            <div className="col-md-6">
                <img src={ fixedId.imges} width="80%" />
            </div>
            <div className="col-md-6">
                    <input type="text" onChange={(e) => { onlyNum(e.target.value)} } />
                <h4 className="pt-5">{fixedId.title}</h4>
                <p>{fixedId.content}</p>
                <p>{fixedId.price}</p>
                <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
    </div>
    );   
}


function TwoSecondModal() {
    return (
        <div className="alert alert-warning">
            2초이내 구매시 할인
        </div>
    )
}
export default DetailItem;