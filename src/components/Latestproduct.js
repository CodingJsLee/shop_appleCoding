





export default function Latestproduct(props) {
    const items = props.latestproduct;
    return (
    <div className="recent-products-container">
        <div className="recent-product">
            <div>
                <h5>최근 본 거</h5>
            </div>
            <div>
              {items.map((name, index)=>(
                    
                    <div key={index}>
                        <div>{items[index].content}</div>

                    </div>
                    ))
                }     
            </div>
        </div>
    </div>
    )
}