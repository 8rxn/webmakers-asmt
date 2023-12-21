import Button from "./ui/button";
import Heading from "./ui/heading";
import Typography from "./ui/typography";
import Clients from "./clients";

const Hero = () => {
  return (
    <section
      className="flex flex-col gap-28 p-11 pt-36 mt-18  "
      style={{
        background: "url(/bg-hero.webp) top no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-6 items-center mx-4 sm:mx-6 md:mx-8 lg:mx-16 ">
        <Heading variant={"lg"}>
          Elevate Your Presence with Seamless Design and Innovation.
        </Heading>
        <Typography>
          From strategic planning to digital presence, we're your dedicated
          partner in achieving solo success.
        </Typography>
        <a href="#pricing" aria-label="View Pricing">
          <Button aria-label="View Pricing" className="w-fit">
            View Pricing
          </Button>
        </a>
      </div>

      {/* Clients subsection */}
      <Clients></Clients>
    </section>
  );
};

export default Hero;
