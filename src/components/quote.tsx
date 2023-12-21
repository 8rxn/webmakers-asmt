import Typography from "./ui/typography";

const Quote = () => {
  return (
    <section className="bg-gray-50 px-20 py-24 flex flex-col gap-10 items-center mb-24 sm:mb-36">
      <img
        src="/company.webp"
        alt="company quote"
        className="h-10"
        height={40}
        width={"auto"}
      />
      <Typography size={"lg"}>
        We&apos;ve been with unicraft to kick start every new project and
        can&apos;t imagine working without it.
      </Typography>
      <div className="flex flex-col gap-4  ">
        <img src="/avatar.webp" alt="avatar" className="h-16 w-16 mx-auto" height={64} width={64} />
        <div>
          <Typography size={"nav"}>Candice Wu</Typography>
          <Typography size={"sm"}>Product Manager, Sisyphus</Typography>
        </div>
      </div>
    </section>
  );
};

export default Quote;
