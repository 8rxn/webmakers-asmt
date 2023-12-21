import Typography from "./ui/typography";

// quote content - Change the content here to update the quote
const quoteContent = {
  content:
    "We've been with unicraft to kick start every new project and can't imagine working without it.",
  name: "Candice Wu",
  designation: "Product Manager, Sisyphus",
  img: "/avatar.webp",
};

const Quote = () => {
  return (
    <section className="bg-gray-50 px-20 py-24 flex flex-col gap-10 items-center mb-24 sm:mb-36">
      <img
        src="/company.webp"
        alt="company quote"
        className="h-10"
        height={40}
        width={140}
      />
      <Typography variant={"lg"}>{quoteContent.content}</Typography>
      <div className="flex flex-col gap-4  ">
        <img
          src={quoteContent.img}
          alt="avatar"
          className="h-16 w-16 mx-auto"
          height={64}
          width={64}
        />
        <div>
          <Typography variant={"nav"}>{quoteContent.name}</Typography>
          <Typography variant={"sm"}>{quoteContent.designation}</Typography>
        </div>
      </div>
    </section>
  );
};

export default Quote;
