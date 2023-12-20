import Typography from "./ui/typography";
import Button from "./ui/button";
import { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const [buttonOpen, setButtonOpen] = useState(false);
  const toggle = () => {
    setButtonOpen(!buttonOpen);
  };
  return (
    <header className="absolute top-0 w-full mt-8 px-4">
      <ul className="flex flex-row w-full max-w-7xl justify-between mx-auto items-center">
        <Typography size={"default"} className="text-gray-800 font-semibold">
          UniCraft
        </Typography>
        <div className="sm:flex gap-12 hidden">
          <a href="#how-it-works">
            <Typography size={"default"}>How it works</Typography>
          </a>
          <a href="#pricing">
            <Typography size={"default"}>Pricing</Typography>
          </a>
          <a href="#faq">
            <Typography size={"default"}>FAQ</Typography>
          </a>
        </div>

        <div className="flex gap-2">
          <Button variant={"outline"} >Contact us</Button>
          <Button onClick={toggle} className="sm:hidden p-2" variant={"outline"}>
            <svg
              className={`transform transition-transform ease-in-out duration-300 ${
                buttonOpen ? "scale-100" : "scale-0 w-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 16 16"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
              />
            </svg>
            <svg
              className={`transform transition-transform ease-in-out duration-300 ${
                buttonOpen ? "scale-0 w-0" : "scale-100"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 16 16"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
              />
            </svg>
          </Button>
        </div>
      </ul>
      <div
        className={`py-8 mt-2 flex flex-col gap-12 sm:hidden bg-gray-50 rounded-md shadow-lg transition-transform ease-in-out duration-300 ${
          buttonOpen ? "scale-y-0 -translate-y-[50%] " : "scale-y-100"
        }`}
      >
        <a href="#how-it-works">
          <Typography size={"default"}>How it works</Typography>
        </a>
        <a href="#pricing">
          <Typography size={"default"}>Pricing</Typography>
        </a>
        <a href="#faq">
          <Typography size={"default"}>FAQ</Typography>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
