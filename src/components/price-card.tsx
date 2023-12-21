import Typography from "./ui/typography";
import Button from "./ui/button";

// price card props, different variants of price card
type priceProps = {
  category: "Freebie" | "Professional" | "Enterprise";
};

// price card info associated with each variant
const pricingInfo = {
  Freebie: {
    name: "Freebie",
    tagline: "Ideal for individuals who need quick access to basic features",
    pricing: "0",
    color: "default", // color of the price card
    benefitCount: 2, // number of benefits to be highlighted
  },
  Professional: {
    name: "Professional",
    tagline:
      "Ideal for individuals who who need advanced features and tools for client work",
    pricing: "25",
    color: "dark",
    benefitCount: 5,
  },
  Enterprise: {
    name: "Enterprise",
    tagline:
      "Ideal for businesses who need personalized services and security for large teams. ",
    pricing: "100",
    color: "default",
    benefitCount: 8,
  },
};

// list of all features for each price card
const Features = [
  "20,000+ of PNG & SVG graphics",
  "Access to 100 million stock images",
  "Upload custom icons and fonts",
  "Unlimited Sharing",
  "Upload graphics & video in up to 4k",
  "Unlimited Projects",
  "Instant Access to our design system",
  "Create teams to collaborate on designs",
];

const PriceCard = (props: priceProps) => {
  return (
    <div
      className={`rounded-md border-slate-200 border-2 flex flex-col sm:w-96 w-11/12 px-6 py-10 mx-auto gap-5 ${
        pricingInfo[props.category].color == "dark" ? "bg-gray-800" : ""
      }`}
    >
      {/* div containing name and tagline */}
      <div className="flex flex-col  gap-3 ">
        <Typography
          variant={"default"}
          className={`text-start font-semibold ${
            pricingInfo[props.category].color == "dark" ? "text-gray-50" : ""
          } `}
        >
          {props.category}
        </Typography>

        <Typography variant={"sm"} className="text-start">
          {pricingInfo[props.category].tagline}
        </Typography>
      </div>

      {/* div containing price and button */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-row flex-nowrap items-center gap-2">
          <Typography
            variant={"lg"}
            className={
              pricingInfo[props.category].color == "dark" ? "text-gray-50" : ""
            }
          >
            $ {pricingInfo[props.category].pricing}
          </Typography>
          <Typography
            variant={"sm"}
            className={
              pricingInfo[props.category].color == "dark" ? "text-gray-50" : ""
            }
          >
            {" "}
            / Month
          </Typography>
        </div>
        <a href="#contact" className="w-full" aria-label="Get Started Now">
          <Button
            aria-label="Get Started Now"
            variant={"outline"}
            className={`${
              pricingInfo[props.category].color == "dark" ? "bg-gray-50" : ""
            } w-full`}
          >
            Get Started Now
          </Button>
        </a>
      </div>

      {/* div containing list of features */}
      <ul className="flex flex-col gap-3 items-start mt-5">
        {Features.map((feature, index) => (
          <li className="flex gap-2 items-center" key={feature}>
            <CheckBox
              className={
                index < pricingInfo[props.category].benefitCount
                  ? pricingInfo[props.category].color == "dark"
                    ? "text-gray-50"
                    : "text-gray-800"
                  : "text-gray-400"
              }
            />
            <Typography
              variant={"base"}
              className={
                index < pricingInfo[props.category].benefitCount
                  ? pricingInfo[props.category].color == "dark"
                    ? "text-gray-50"
                    : "text-gray-800"
                  : "text-gray-400"
              }
            >
              {" "}
              {feature}{" "}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;

//  svg  checkbox for price card features
const CheckBox = (props: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={props.className + " inline-block mr-2"}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25" />
        <path d="m5.75 7.75l2.5 2.5l6-6.5" />
      </g>
    </svg>
  );
};
