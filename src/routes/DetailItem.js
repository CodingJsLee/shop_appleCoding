
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';



function DetailItem(props) {
    // 언제 씀? : 실행시점이 약간 다르다. 렌더링 후 실행됨
    useEffect(() => {
        console.log("헬로월드");
        // for (var i = 0; i < 10000; i++){
        //     console.log(1);
        // }
    });
    let { id } = useParams();

    const mainData = [...props.mainDisplayData];
    console.log(mainData[0]);
    console.log(mainData[1]);
    console.log(mainData[2]);
    
    const fixedId = mainData.find((element) => element.id == id);

    let[count, setCount] = useState(0);
    // 현재 url 파라미터 정보가 남음
    
    // console.log(">>> : "+ id);
    return(
        <div className="container">
            {count}
            <button onClick={()=>{ setCount(count+1) }}>버튼</button>
        <div className="row">
            <div className="col-md-6">
                    <img src={ fixedId.imges} width="80%" />
            </div>
            <div className="col-md-6">
                <h4 className="pt-5">{fixedId.title}</h4>
                <p>{fixedId.content}</p>
                <p>{fixedId.price}</p>
                <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
    </div>
    );   
}

export default DetailItem;