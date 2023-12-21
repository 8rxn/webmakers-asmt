import Button from "./ui/button";

// // Image slider content - Change the content here to update the image slider
const folderPath = "/past-work/";
const images = ["1.webp", "2.webp", "3.webp"];

const Slider = () => {
  return (
    <section className="flex flex-col my-20 gap-16 items-center">
      {/* Image slider animation with class image-slider (defined in App.css) */}
      <div className="w-screen overflow-hidden whitespace-nowrap">
        {/* The images are mapped three times to create and illusion of infinite loop as when the last image is reached, the animation restarts and moves to the first image which was on screen from the second div.  */}
        <div className="inline-block mx-4 image-slider">
          {images.map((image) => (
            <div className="max-w-screen inline-block mx-4 " key={image}>
              <img
                src={folderPath + image}
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
            <div
              className="max-w-screen xl:inline-block mx-4 hidden "
              key={image}
            >
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
      <a href="#contact">
        <Button aria-label="View recent work" variant={"outline"}>
          View recent work
        </Button>
      </a>
    </section>
  );
};

export default Slider;
