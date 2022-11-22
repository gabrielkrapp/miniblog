import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';

import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

import { AuthProvider } from './context/AuthContext';

import Navbar from './components/Navbar';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Footer from './components/Footer'
import Register from './pages/Login/Register';
import Login from './pages/Login/Login';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';
import Search from './pages/Search/Search';
import Post from './pages/Post/Post';
import EditPost from './pages/Editpost/EditPost';

function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar></Navbar>
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/About' element={<About />}></Route>
              <Route path='/Search' element={<Search />}></Route>
              <Route path='/posts/:id' element={<Post />}></Route>
              <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />}></Route>
              <Route path='/register' element={!user ? <Register /> : <Navigate to="/" />}></Route>
              <Route path='posts/edit/:id' element={user ? <EditPost /> : <Navigate to="/login" />}></Route>
              <Route path='posts/create' element={user ? <CreatePost /> : <Navigate to="/login" />}></Route>
              <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to="/login" />}></Route>
            </Routes>
          </div>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
