import Button from "./ui/button";

const images = ["1.png", "2.png", "3.png"];
const Slider = () => {
  return (
    <section className="flex flex-col my-20 gap-16 items-center">
      {/* Image slider animation with class image-slider */}
      <div className="w-screen overflow-hidden whitespace-nowrap">
        <div className="inline-block mx-4 image-slider">
          {images.map((image) => (
            <div className="max-w-screen inline-block mx-4 ">
              <img
                src={"/past-work/" + image}
                alt=""
                width={360}
                className="w-full"
              />
            </div>
          ))}
          {images.map((image) => (
            <div className="max-w-screen inline-block mx-4 ">
              <img
                src={"/past-work/" + image}
                alt=""
                width={360}
                className="w-full"
              />
            </div>
          ))}
          {images.map((image) => (
            <div className="max-w-screen xl:inline-block mx-4 hidden ">
              <img
                src={"/past-work/" + image}
                alt=""
                width={360}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <Button variant={"outline"}>View recent work</Button>
    </section>
  );
};

export default Slider;
