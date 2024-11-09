import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import './App.css'

function App() {

  return (
    <>
      <div className="xs:px-5 smd:px-8 md:px-20 lg:px-44 pb-16">
        <Header/>
        <Body/>
        <Footer/> 
      </div>
    </>
  )
}

export default App
