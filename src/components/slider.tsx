import Button from "./ui/button";

const images = ["1.webp", "2.webp", "3.webp"];
const Slider = () => {
  return (
    <section className="flex flex-col my-20 gap-16 items-center">
      {/* Image slider animation with class image-slider */}
      <div className="w-screen overflow-hidden whitespace-nowrap">
        <div className="inline-block mx-4 image-slider">
          {images.map((image) => (
            <div className="max-w-screen inline-block mx-4 " key={image}>
              <img
                src={"/past-work/" + image}
                alt="past work sample "
                width={360}
                height={400}
                className="w-full"
              />
            </div>
          ))}
          {images.map((image) => (
            <div className="max-w-screen inline-block mx-4 " key={image}>
              <img
                src={"/past-work/" + image}
                alt="past work sample "
                width={360}
                height={400}
                className="w-full"
              />
            </div>
          ))}
          {images.map((image) => (
            <div className="max-w-screen xl:inline-block mx-4 hidden " key={image}>
              <img
                src={"/past-work/" + image}
                alt="past work sample "
                width={360}
                height={400}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <Button aria-label="View recent work" variant={"outline"}>
        View recent work
      </Button>
    </section>
  );
};

export default Slider;
