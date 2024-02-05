import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap/";

import reactMain from "./img/reactMain.png";

import { createContext, useState } from "react";
import mainData from "./data";
import MainItem from "./components/MainItem";
import DetailItem from "./routes/DetailItem";
import About from "./components/About";
import { Routes, Route, Link, useNavigate, Outlet,  } from 'react-router-dom'
import Event from "./components/Event";
import { Button } from "bootstrap";
import axios from 'axios';
import Cart from "./components/Cart";
import { useDispatch, useSelector } from "react-redux";

// state보관함
export let Context1 = createContext();


function App() {

  const [mainDisplayData, setMainDisplayData] = useState(mainData);
  const [sortChecker, setSortChecker] = useState(0);
  const [재고] = useState([10, 11, 12]);

  const [imgIdx, setImgIdx] = useState(0);
  let navigate = useNavigate();
  function mainDataSort() {
    let sortTmp = [...mainData];
    
    if (sortChecker === 0) {
      setMainDisplayData(sortTmp.sort((a, b) => b.id - a.id));
      setSortChecker(1);
    } else {
      setMainDisplayData(sortTmp.sort((a, b) => a.id - b.id));
      setSortChecker(0);
    }
    

  }

  // 라우터로 페이지 나누는법
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">리액트장인</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/2')}}>Detail</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                //className="main-bg"
                style={{
                  backgroundImage: "url(" + reactMain + ")",
                  height: "300px",
                }}
              ></div>
              <div className="container" >
                <div className="row">
                  {
                    // 컴포넌트화
                    mainDisplayData.map((name, idx) => {
                      return (
                        <MainItem 
                          idx={idx} key={idx.id} 
                          mainDisplayData={mainDisplayData}
                        />
                      );
                    })
                  }
                  <div>
                    <button onClick={() => {
                    axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then((data) => {
                      console.log(data.data);
                      console.log(mainDisplayData);
                      setMainDisplayData([...mainData, ...data.data]);
                    })
                    .catch((data) => {
                      console.log('실패함ㅋ')
                    })
                    }}>서버요청
                    </button>
                  </div>
                  <div>
                    <button onClick={()=>{ mainDataSort() }}>버튼</button>
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail/:id" element={
          <Context1.Provider value={{재고, mainData}}>
            <DetailItem mainDisplayData={mainDisplayData} />
          </Context1.Provider>
          }
        />

        <Route path="/cart" element={
          <Cart />
        }></Route>

        <Route path="/about" element={ <About></About> } >
          <Route path="member" element={ <div>member임</div> } />
          <Route path="location" element={ <About></About> } />
        </Route>
        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} ></Route>
          <Route path="two" element={<p>리액트 오늘 하루 무료</p>} ></Route>
        </Route>
        <Route path="*" element={<div>404 - page not found</div>}/>    
      </Routes>
      

      


    </div>
  );
}

export default App;
