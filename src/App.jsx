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
      <div className="Container">
          <Section />
      </div>
    </>
  )
}