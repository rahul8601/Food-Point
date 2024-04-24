import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src }) => {
  return (
    <>
      <LazyLoadImage
        alt="img"
        effect="blur"
        src={src}
        className=" rounded-full object-cover w-[10rem] h-[10rem] shadow-lg"
      />
    </>
  );
};

export default Img;
