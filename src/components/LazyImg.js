import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImg = ({ src }) => {
  return (
    <>
      <LazyLoadImage
        alt="img"
        effect="blur"
        src={src}
        className=" w-full h-full object-cover object-center rounded-lg shadow-lg"
      />
    </>
  );
};

export default LazyImg;

// width: 100%;
// height: 100%;
// object-fit: cover;
// object-position: center;
