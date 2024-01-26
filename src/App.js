import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap/";

import reactMain from "./img/reactMain.png";

import { useState } from "react";
import mainData from "./data";
import MainItem from "./components/MainItem";
import DetailItem from "./routes/DetailItem";
import About from "./components/About";
import { Routes, Route, Link, useNavigate, Outlet,  } from 'react-router-dom'
import Event from "./components/Event";
import { Button } from "bootstrap";


function App() {
  const [mainDisplayData, setMainDisplayData] = useState(mainData);
  const [sortChecker, setSortChecker] = useState(0);

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
          <Navbar.Brand href="#home">리액트장인</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
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
              <div className="container">
                <div className="row">
                  {
                    // 컴포넌트화
                    mainDisplayData.map((name, idx) => {
                      console.log("idx", idx);
                      return (
                        <MainItem
                          idx={idx}
                          mainDisplayData={mainDisplayData}
                        />
                      );
                    })
                  }
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail/:id" element={<DetailItem mainDisplayData={mainDisplayData}></DetailItem> } />

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
      <div>
        <button onClick={()=>{ mainDataSort() }}>버튼</button>
      </div>
    </div>
  );
}

export default App;
