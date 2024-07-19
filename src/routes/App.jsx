import { Outlet } from 'react-router-dom'
import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FetchItems from '../components/FetchItems'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../components/LoadingSpinner'

function App() {
  const fetchStatus = useSelector(store => store.fetchStatus)
  
  return (
    <>
    <Header></Header>
    <FetchItems></FetchItems>
    {fetchStatus.currentlyFetching ? <LoadingSpinner></LoadingSpinner> : <Outlet />}
    <Footer></Footer>
    </>
  )
}

export default App
