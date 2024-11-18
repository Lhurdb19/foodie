import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll";
import About from "./Routes/About/about";
import Home from "./Routes/Home/home";
import Blog from "./Routes/Blogs/blog";
import Menu from "./Routes/Menu/menu";
// import Contact from "./Routes/Contact/contact";
import Navigation from "./Navigation/navigation";
import Notfound from "./Routes/Notfound/notfound";
import Scrolltotop from "./Routes/Scrolltotop/scrolltotop";
import Footer from "./Routes/Footer/footer";

function App() {
  return (
    <Router>
      <Navigation/>
      <Element name="home"><Home/></Element>
      <Element name="about"><About/></Element>
      <Element name="blog"><Blog/></Element>
      <Element name="menu"><Menu/></Element>
      {/* <Element name="contact"><Contact/></Element> */}
      <Element name="*"><Notfound/></Element>
      <Scrolltotop/>
      <Footer/>
    </Router>
  );
}

export default App;
