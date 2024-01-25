function MainItem(props) {
  return (
    <div className="col-md-4" style={{ marginTop: "20px" }}>
      {props.subject[props.idx]}
      <img src={props.img[props.idx]} className="main-itm" />
      <h5 onClick={()=>{}} >{props.mainDisplayData[props.idx].title}</h5>
      <p>{props.mainDisplayData[props.idx].price}</p>
    </div>
  );
}
export default MainItem;
