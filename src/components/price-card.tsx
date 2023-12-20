import Typography from "./ui/typography";
import Button from "./ui/button";

type priceProps = {
  category: "Freebie" | "Professional" | "Enterprise";
};

const pricingInfo = {
  Freebie: {
    name: "Freebie",
    tagline: "Ideal for individuals who need quick access to basic features",
    pricing: "0",
    color: "default",
    benefitCount: 2,
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
          size={"default"}
          className={`text-start font-semibold ${
            pricingInfo[props.category].color == "dark" ? "text-gray-50" : ""
          } `}
        >
          {props.category}
        </Typography>

        <Typography size={"sm"} className="text-start">
          {pricingInfo[props.category].tagline}
        </Typography>
      </div>

      {/* div containing price and button */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-row flex-nowrap items-center gap-2">
          <Typography
            size={"lg"}
            className={
              pricingInfo[props.category].color == "dark" ? "text-gray-50" : ""
            }
          >
            $ {pricingInfo[props.category].pricing}
          </Typography>
          <Typography
            size={"sm"}
            className={
              pricingInfo[props.category].color == "dark" ? "text-gray-50" : ""
            }
          >
            {" "}
            / Month
          </Typography>
        </div>
        <Button
          variant={"outline"}
          className={
            pricingInfo[props.category].color == "dark" ? "bg-gray-50" : ""
          }
        >
          Get Started Now
        </Button>
      </div>

      {/* div containing list of features */}
      <div className="flex flex-col gap-3 items-start mt-5">
        {Features.map((feature, index) => (
          <ul className="flex gap-2 items-center">
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
              size={"base"}
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
          </ul>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;

//  svg  checkbox for price card
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
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      >
        <path d="M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25" />
        <path d="m5.75 7.75l2.5 2.5l6-6.5" />
      </g>
    </svg>
  );
};