import Typography from "./ui/typography";

// list of all companies - Change the content here to update the companies
const companies = [
  {
    link: "https://zapier.com",
    src: "zapier.svg",
  },
  {
    link: "https://spotify.com",
    src: "spotify.svg",
  },
  {
    link: "https://zoom.com",
    src: "zoom.svg",
  },
  {
    link: "https://slack.com",
    src: "slack.svg",
  },
  {
    link: "https://amazon.com",
    src: "amazon.svg",
  },
  {
    link: "https://adobe.com",
    src: "adobe.svg",
  },
];

function Clients() {
  return (
    <div className="flex flex-col items-center w-full">
      <Typography variant={"sm"} className="mb-6 ">
        Trusted by 250+ Companies
      </Typography>
      <div className="flex flex-col items-center sm:flex-row justify-center w-full max-w-4xl lg:max-w-5xl flex-wrap gap-12">
        {companies.map((image) => (
          <a
            href={image.link}
            target="_blank"
            rel="noreferrer"
            aria-label={"Link to " + image.link}
            key={image.link}
          >
            <img
              className=""
              src={"/companies/" + image.src}
              alt={"logo: " + image.link}
              width={100}
              height={37}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Clients;
