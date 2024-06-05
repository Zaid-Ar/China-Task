
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import './App.css'
import Orders from "./pages/Orders";
import Layout from "./layout/PurchaseLayout";
import MyPurchase from "./pages/MyPurchase";
import AddProduct from "./pages/AddProduct";
// import AccountDetails from "./pages/AccountDetails";
function App() {
  

  return (
   
    <Router>
      <Routes>
      <Route
          path="/purchases"
          element={
            
            <Layout>
              <MyPurchase/>
            </Layout>
            
        
          }
        />
        {/* <Route
          path="/account-Details"
          element={
            
            <Layout>
              <AccountDetails/>
            </Layout>
            
        
          }
        /> */}
           <Route
          path="/orders"
          element={
            
            <Layout>
              <Orders/>
            </Layout>
            
        
          }
        />
        <Route path="/addProduct" element={<Layout>
          <AddProduct/>
        </Layout>}/>
      </Routes>
    </Router>
    
  )
}

export default App
