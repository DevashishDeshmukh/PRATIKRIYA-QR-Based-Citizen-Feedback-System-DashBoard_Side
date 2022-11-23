import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Lists from "./pages/list/Lists";
import Single from "./pages/single/Single"
import Newp from "./pages/new/Newp";
import QRCode from "./pages/QRCode/QRCode"
import Hchart from "./Hchart"
import Chart from "./../src/components/chart/Chart"

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { productInputs, userInputs } from "./formSource";


function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route index element={<Login/>} />
            {/* <Route index element={<Home/>} /> */}
            <Route path="home" element={<Home />} />
            {/* <Route path="logout" element={<Login />} /> */}
            {/* <Route path="users">
              <Route index element={<Lists />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<Newp inputs={userInputs} title="Add New User" />}
              />
            </Route> */}
            <Route path="products">
              <Route index element={<Lists />} />
              <Route path=":productId" element={<Single />} />
              
            </Route>
            <Route path="stats">
              <Route index element={<Single />} />
              {/* <Route path=":productId" element={<Single />} /> */}
              
            </Route>
            <Route path="feedback">
              <Route index element={<Chart />} />
              {/* <Route path=":productId" element={<Single />} /> */}
              
            </Route>
            <Route path="QRCode">
              <Route index element={<QRCode />} />
              <Route
                path="new"
                element={<Newp inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
