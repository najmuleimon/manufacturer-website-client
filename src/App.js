import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Dashboard from './Pages/Dashboard/Dashboard';
import Purchase from './Pages/Purchase/Purchase';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/Login/PrivateRoute';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import AddProduct from './Pages/Dashboard/AddProduct';
import PrivateAdminRoute from './Pages/Login/PrivateAdminRoute';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>
          <Route index element={<MyOrders />}></Route>
          <Route path="add-review" element={<AddReview />}></Route>
          <Route path="profile" element={<MyProfile />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route path="users" element={<PrivateAdminRoute><Users /></PrivateAdminRoute>}></Route>
          <Route path="manage-orders" element={<ManageOrders />}></Route>
          <Route path="add-product" element={<PrivateAdminRoute><AddProduct /></PrivateAdminRoute>}></Route>
          <Route path="manage-products" element={<ManageProducts />}></Route>
        </Route>
        <Route path='purchase/:id' element={<Purchase />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
