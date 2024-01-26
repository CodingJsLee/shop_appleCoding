function MainItem(props) {
  return (
    <div className="col-md-4" style={{ marginTop: "20px" }}>
      {props.mainDisplayData[props.idx].title}
      <img src={props.mainDisplayData[props.idx].imges} alt="" className="main-itm" />
      <h5 onClick={()=>{}} >{props.mainDisplayData[props.idx].content}</h5>
      <p>{props.mainDisplayData[props.idx].price}</p>
    </div>
  );
}
export default MainItem;
