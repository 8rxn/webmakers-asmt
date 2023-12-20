import Typography from "./ui/typography";

type Props = {};

const Quote = (props: Props) => {
  return (
    <section className="bg-gray-50 px-23 py-24 flex flex-col gap-10 items-center">
      <img src="/company.png" alt="company quote" className="h-10" />
      <Typography size={"lg"}>
        We&apos;ve been with unicraft to kick start every new project and
        can&apos;t imagine working without it.
      </Typography>
      <ul className="flex flex-col gap-4  ">
        <img src="/avatar.png" alt="avatar" className="h-16 w-16 mx-auto" />
        <div>
          <Typography size={"nav"}>Candice Wu</Typography>
          <Typography size={"sm"}>Product Manager, Sisyphus</Typography>
        </div>
      </ul>
    </section>
  );
};

export default Quote;
