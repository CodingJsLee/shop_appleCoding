import { useParams } from "react-router-dom";

function DetailItem(props){
    // 현재 url 파라미터 정보가 남음
    let {id} = useParams(); 
    console.log(">>> : "+ id);
    return(
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
                <h4 className="pt-5">{props.mainDisplayData[0].title}</h4>
                <p>{props.mainDisplayData[id].content}</p>
                <p>{props.mainDisplayData[id].price}</p>
                <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
    </div>
    );   
}

export default DetailItem;