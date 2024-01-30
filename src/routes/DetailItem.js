
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { Context1 } from './../App';


function DetailItem(props) {

    let {재고} = useContext(Context1);
    console.log(재고);


    let { id } = useParams();
    let [count, setCount] = useState(0);
    let [twoSecondModalSwitch, setTwoSecondModalSwitch] = useState(false);
    const mainData = [...props.mainDisplayData];
    const fixedId = mainData.find((element) => element.id == id);
    const [num, setNum] = useState('');
    const [taps, setTap] = useState(0); // tap 상태 저장 state
    const [mainFade, setMainFade] = useState('');

    // 언제 씀? : 실행시점이 약간 다르다. 렌더링 후 실행됨
    useEffect(() => {
        
        let a = setTimeout(() => { setTwoSecondModalSwitch(true) }, 2000);
        let b = setTimeout(() => { setMainFade('detail-cmp-opacity-end') },200 );
        return () => { // clean up function이라는 별명을 가짐.
            clearTimeout([a,b]);
            setMainFade('');
        }
    }, []);
    
    const OnlyNum = (e) => { 
        const tmp = e.target.value;
       setNum(tmp);
        console.log(isNaN(num));
        if (isNaN(num)) {
            alert('그러지 마세요.');
        } 
    }




    return(
    <div className={`container detail-cmp-opacity-start ${mainFade}`}>
            {
                twoSecondModalSwitch == false ? <TwoSecondModal/> : null
            }
            {count}
            <button onClick={()=>{ setCount(count+1) }}>버튼</button>
        <div className="row">
            <div className="col-md-6">
                <img src={ fixedId.imges } width="80%" />
            </div>
            <div className="col-md-6">
                <input type="text" onChange={ OnlyNum } />
                <h4 className="pt-5">{fixedId.title}</h4>
                <p>{fixedId.content}</p>
                <p>{fixedId.price}</p>
                <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
        <Nav variant="tabs" defaultActiveKey="link0">
            <Nav.Item>
                <Nav.Link onClick={()=>{setTap(0)}}eventKey="link0">버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={()=>{setTap(1)}} eventKey="link1">버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={()=>{setTap(2)}} eventKey="link2">
                    버튼2
                </Nav.Link>
            </Nav.Item>
        </Nav>

        <Taps taps={taps} />   


    </div>
    )  
    
}



function TwoSecondModal() {
    return (
        <div className="alert alert-warning">
            2초이내 구매시 할인
        </div>
    )
}
function Taps(props) {
    // <div>
    // if (props.taps === 0) {
    //     <div>내용0</div>
    // }
    // if (props.taps === 1) {
    //     <div>내용1</div>
    // }
    // if (props.taps === 2) {
    //     <div>내용2</div>
    // }
    // </div>
    let { 재고 } = useContext(Context1);
    let returnTag;
    let [fade, setFade] = useState('');

    switch (props.taps) {
        case 0:
            returnTag = <div>{재고[0]}</div>;break;
        case 1:
            returnTag = <div>내용1</div>;break;
        case 2:
            returnTag = <div>내용2</div>;break;
        default:
            returnTag = null;
    }

    
    useEffect(() => {
        let a = setTimeout(() => {
            setFade('end');
        },200)
        
        return () => {
            clearTimeout(a);
            setFade('');
        }
    }, [props.taps])
    return (
        <div className={`start ${fade}`} >
            {returnTag}
        </div>
    )
    // return [<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][props.taps] 로 대체 가능
}
export default DetailItem;