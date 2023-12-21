import PriceCard from "./price-card";
import Heading from "./ui/heading";
import Typography from "./ui/typography";

const Pricing = () => {
  return (
    <section
      className="flex flex-col gap-12 py-20 bg-top bg-no-repeat bg-contain  "
      id="pricing"
      style={{ background: "url('bg-pricing.png')" }}
    >
      <ul className="flex flex-col gap-3">
        <Heading size={"default"}>
          Pricing made for collaborative support.
        </Heading>
        <Typography size={"nav"} className="text-center max-w-3xl mx-auto">
          Plain is made for your entire company. Only pay for users that
          actually message customers. Everyone else is free, forever.
        </Typography>
      </ul>

      <ul className="flex flex-col sm:flex-row flex-wrap items-center w-fit mx-auto  gap-6">
        <PriceCard category={"Freebie"} />
        <PriceCard category={"Professional"} />
        <PriceCard category={"Enterprise"} />
      </ul>
    </section>
  );
};

export default Pricing;
