import test from "../../../assets/imgs/test.svg";
import { StyledCarousel } from "./StyledCarousel";
import { useRef } from "react";
import { CardCarousel } from "./CardCarousel/CardCarousel";
import { AiOutlineLeft } from "react-icons/ai";
import { motion } from "framer-motion";

const arrImgs = [
  test,
  test,
  test,
  test,
  test,
  test,
  test,
  test,
  test,
  test,
  test,
  test,
  test,
  test,
  test,
  test,
];
export const CarouselLibary = () => {
  const carousel = useRef<any>();

  const moveLeft = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const moveRigth = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div className="carousel">
      <button onClick={() => moveLeft()} className="left">
        <AiOutlineLeft />
      </button>

      <StyledCarousel>
        <motion.ul
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          ref={carousel}
          className="inner"
        >
          {arrImgs.map((element, i, arr) => (
            <CardCarousel key={i} image={element} />
          ))}
        </motion.ul>
      </StyledCarousel>
      <button onClick={() => moveRigth()} className="right">
        <AiOutlineLeft />
      </button>
    </div>
  );
};
