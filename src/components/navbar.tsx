import Typography from "./ui/typography";
import Button from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  // state to toggle mobile menu
  const [buttonOpen, setButtonOpen] = useState(false);
  const toggle = () => {
    setButtonOpen(!buttonOpen);
  };
  return (
    <header className="absolute top-0  w-full mt-8 px-4 bg-transparent">
      {/* Desktop navbar */}
      <ul className="flex flex-row w-full max-w-6xl justify-between mx-auto items-center">
        <li>
          <Typography variant={"default"} className="text-gray-800 font-semibold">
            UniCraft
          </Typography>
        </li>
        <li>
          <ul className="sm:flex gap-12 hidden">
            <li>
              <a href="#how-it-works" aria-label="How it works">
                <Typography variant={"default"}>How it works</Typography>
              </a>
            </li>
            <li>
              <a href="#pricing" aria-label="Pricing">
                <Typography variant={"default"}>Pricing</Typography>
              </a>
            </li>
            <li>
              <a href="#faq" aria-label="FAQ">
                <Typography variant={"default"}>FAQ</Typography>
              </a>
            </li>
          </ul>
        </li>

        <li>
          <ul className="flex gap-2">
            <li>
              <a
                href="mailto:me@rajaryan.work?subject=You%20are%20Hired!"
                target="_blank"
                rel="noreferrer"
              >
                <Button aria-label="Contact us" variant={"outline"}>
                  Contact us
                </Button>
              </a>
            </li>
            <li>
              <Button
                aria-label="Menu toggle"
                onClick={toggle}
                className="sm:hidden p-2"
                variant={"outline"}
              >
                {/* Close Button X */}
                <svg
                  className={`transform transition-transform ease-in-out duration-300 ${
                    buttonOpen ? "scale-0 w-0" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
                  />

                  {/* Hamburger Button  */}
                </svg>
                <svg
                  className={`transform transition-transform ease-in-out duration-300 ${
                    buttonOpen ? "" : "scale-0 w-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
                  />
                </svg>
              </Button>
            </li>
          </ul>
        </li>
      </ul>

      {/* Mobile options */}
      <div
        className={`py-8 mt-2 flex flex-col gap-12 sm:hidden bg-gray-50 rounded-md shadow-lg transition-transform ease-in-out duration-300 ${
          buttonOpen ? "" : "scale-y-0 -translate-y-[50%] "
        }`}
      >
        <a href="#how-it-works" aria-label="How it works">
          <Typography variant={"default"}>How it works</Typography>
        </a>
        <a href="#pricing" aria-label="Pricing">
          <Typography variant={"default"}>Pricing</Typography>
        </a>
        <a href="#faq" aria-label="FAQ">
          <Typography variant={"default"}>FAQ</Typography>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
