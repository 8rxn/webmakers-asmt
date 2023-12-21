
import Typography from "./ui/typography";

const companies = [
  {
    name: "zapier",
    src: "/companies/zapier.svg",
  },
  {
    name: "spotify",
    src: "/companies/spotify.svg",
  },
  {
    name: "zoom",
    src: "/companies/zoom.svg",
  },
  {
    name: "slack",
    src: "/companies/slack.svg",
  },
  {
    name: "amazon",
    src: "/companies/amazon.svg",
  },
  {
    name: "adobe",
    src: "/companies/adobe.svg",
  },
];

function Clients() {
  return (
    <div className="flex flex-col items-center w-full">
      <Typography size={"sm"} className="mb-6 ">Trusted by 250+ Companies</Typography>
      <div className="flex flex-col sm:flex-row justify-center w-full max-w-4xl lg:max-w-5xl flex-wrap gap-12">
        {companies.map((item) => (
          <img className="" src={item.src} alt="" />
        ))}
      </div>
    </div>
  );
}

export default Clients;
