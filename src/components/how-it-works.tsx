import Heading from "./ui/heading";
import Typography from "./ui/typography";

const Steps = [
  {
    title: "Subscribe",
    description:
      "Subscribe to a plan & you'll get an instant access to your private Slack channel.",
  },
  {
    title: "Request",
    description:
      "Submit any number of requests. We'll work through them, one at a time, ensuring consistent updates every 24-48 hours",
  },
  {
    title: "Revise",
    description:
      "Need changes? We guarantee unlimited revisions until you're 200% satisfied.",
  },
];

const Workings = () => {
  return (
    <section
      id="how-it-works"
      className=" flex flex-col gap-12 max-w-7xl mx-auto border-gray-200 rounded-3xl border py-12 shadow-[0px_11px_37px_1px_rgba(28,25,23,0.05)] mb-24 sm:mb-36"
    >
      <ul className="flex flex-col gap-2">
        <Heading size={"sm"}>How it works</Heading>
        <Typography>
          Premium designs, unlimited requests, super fast delivery, for one flat
          monthly fee.
        </Typography>
      </ul>
      <ul className="flex flex-col sm:flex-row ">
        {Steps.map((step, index) => (
          <>
            <div>
              <div className=" bg-gradient-to-t from-transparent to-[#d8b4fe] bg-clip-text text-transparent text-[240px] leading-none relative -z-1 text-center">
                {index + 1}
              </div>

              <div className="relative bottom-1/4">
                <Typography size={"lg"} className="font-bold text-4xl">
                  {step.title}
                </Typography>
                <Typography size={"nav"} className="max-w-sm mx-auto">
                  {step.description}
                </Typography>
              </div>
            </div>
            {index != Steps.length - 1 && (
              <div className="flex flex-row justify-center sm:flex-col pt-3 sm:justify-start sm:pt-20">
                <svg
                  className={`text-gray-600 rotate-90 ${
                    index % 2 == 0 ? "transform -scale-y-100 mr-16" : "ml-16"
                  } sm:mx-0 sm:transform-none sm:rotate-0`}
                  width="46"
                  height="25"
                  viewBox="0 0 46 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M45.1672 13.2985C44.0795 15.6782 41.2583 16.015 39.1955 17.1511C34.0722 19.203 28.9576 21.2695 24.0226 23.7821C23.1162 24.2919 23.3098 22.9191 23.5667 22.4366C24.4239 19.5399 27.4334 18.9336 29.7584 17.7392C32.1679 16.6104 34.6319 15.6254 37.1047 14.6622C34.8642 14.6404 32.5973 14.9335 30.3832 15.1119C21.3914 16.279 12.2658 18.1707 4.04481 22.229C3.04593 22.7676 2.08019 23.3696 1.15313 24.0315C0.952489 24.1844 0.544169 24.4575 0.352329 24.1353C0.112969 23.1885 0.790568 22.2035 1.26225 21.4279C6.87313 15.4561 25.6048 11.9148 36.5802 11.8729C33.8821 10.187 31.309 8.2789 28.6619 6.51647C27.3279 5.51327 25.7509 4.72309 24.6685 3.41948C24.3675 2.44723 25.1842 1.23829 25.9779 0.770376C26.1522 0.708473 26.2806 0.837742 26.3422 0.996141C32.4741 4.72673 38.4915 8.99079 45.3239 11.2321C46.1387 11.5033 45.4066 12.7651 45.1672 13.3022V13.2985Z"
                    fill="#4B5563"
                  />
                </svg>
              </div>
            )}
          </>
        ))}
      </ul>
    </section>
  );
};

export default Workings;
