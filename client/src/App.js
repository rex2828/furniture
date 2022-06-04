import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import InquiryForm from './pages/InquiryForm';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { login } from './store/login-slice';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(login())
  }, [dispatch])


  const { isLoggedIn, user } = useSelector(state => state.login)
  const cartVisible = useSelector(state => state.ui.cartVisible)
  return (
    <div>
      <Navbar loggedin={isLoggedIn} user={user} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/form' element={isLoggedIn ? <InquiryForm /> : <Navigate to='/login' />}></Route>
        <Route path='/login' element={isLoggedIn ? <Navigate to='/' /> : <Login />}></Route>
      </Routes>
      {cartVisible && <Cart />}
    </div>
  );
}

export default App;
