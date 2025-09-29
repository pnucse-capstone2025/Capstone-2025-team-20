
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MenuBar from './components/MenuBar'
import Main from './pages/Main'
import { EmptyBox, Footer } from './style/common.styled'
import GlobalStyle from './style/GlobalStyle'
import Login from './pages/Login'
import LoginPage from './pages/LoginPage'
import SearchPage from './pages/SearchPage'
import DetailPage from './pages/DetailPage'
import { AuthProvider } from './context/AuthContext'
import { ToastProvider } from './context/ToastContext'
import PrivateRoute from './routes/PrivateRoute'
import My from './pages/My'
import Signup from './pages/Signup'
import Onboarding from './pages/Onboarding'

function App() {

  return (
    <AuthProvider>
      <ToastProvider>
        <BrowserRouter>
        <GlobalStyle/>
        <MenuBar/>
        <Routes>
          <Route path="/static" element={<Main />} />
          <Route path="/static/Login" element={<Login/>} />
          <Route path="/static/My" element={
            <PrivateRoute>
              <My/>
            </PrivateRoute>} />
          <Route path="/static/LoginPage" element={<LoginPage/>} />
          <Route path="/static/Signup" element={<Signup/>} />
          <Route path="/static/SearchPage/:keyWord" element={<SearchPage/>} />
          <Route path="/static/DetailPage/:id" element={<DetailPage/>} />
          <Route path="/static/Onboarding" element={<Onboarding/>} />
        </Routes>
      </BrowserRouter>
      </ToastProvider>
    </AuthProvider>
  )
}

export default App
