import "./App.css";
import Price from "./components/price";
import Workings from "./components/how-it-works";
import Quote from "./components/quote";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Faq from "./components/faq";
import Slider from "./components/slider";
import Hero from "./components/hero";

const App = () => {
  return (
    <main className="w-full  mb-0  overflow-x-hidden ">
      <Navbar></Navbar>
      <Hero></Hero>
      <Slider></Slider>
      <Workings></Workings>
      <Quote></Quote>
      <Price></Price>
      <Faq></Faq>
      <Footer></Footer>
    </main>
  );
};

export default App;
