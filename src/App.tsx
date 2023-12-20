import "./App.css";
import Heading from "./components/ui/heading";
import Typography from "./components/ui/typography";
import Button from "./components/ui/button";
import Clients from "./components/clients";
import Price from "./components/price";
import Workings from "./components/how-it-works";
import Quote from "./components/quote";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Faq from "./components/faq";
import Slider from "./components/slider";

type Props = {};

const App = (props: Props) => {
  return (
    <main className="w-full mt-24 grid min-h-screen place-items-center">
      <Navbar></Navbar>
      <div className="flex flex-col gap-6 items-center mx-4 sm:mx-6 md:mx-8 lg:mx-16 ">
        <Heading size={"lg"}>
          Elevate Your Presence with Seamless Design and Innovation.
        </Heading>
        <Typography>
          From strategic planning to digital presence, we're your dedicated
          partner in achieving solo success.
        </Typography>
        <Button className="w-fit">View Pricing</Button>
      </div>

      <Clients></Clients>
      <Slider></Slider>
      <Workings />
      <Quote></Quote>
      <Price></Price>
      <Faq></Faq>
      <Footer></Footer>
    </main>
  );
};

export default App;
