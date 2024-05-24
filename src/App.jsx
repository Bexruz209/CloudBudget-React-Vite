import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";
import Section from "./components/Section/Section.jsx";
import Header from "./components/header/header.jsx";


export default function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <Header />
        </div>
      </div>
      <Section />
      <Main />
      <div className="Container">
      </div>
        <Footer />
    </>
  )
}