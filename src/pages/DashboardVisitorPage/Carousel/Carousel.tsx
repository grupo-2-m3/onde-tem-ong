import test from "../../../assets/imgs/test.svg";
// import { StyledCarousel } from "./StyledCarousel";
// import { useRef } from "react";
// import { CardCarousel } from "./CardCarousel/CardCarousel";
// import { AiOutlineLeft } from "react-icons/ai";
// import { motion } from "framer-motion";
// export const CarouselLibary = () => {
//   const carousel = useRef<any>();

//   const moveLeft = () => {
//     carousel.current.scrollLeft -= carousel.current.offsetWidth;
//   };
//   const moveRigth = () => {
//     carousel.current.scrollLeft += carousel.current.offsetWidth;
//   };

//   return (
//     <div className="carousel">
//       <button onClick={() => moveLeft()} className="left">
//         <AiOutlineLeft />
//       </button>

//       <StyledCarousel>
//         <motion.ul
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           ref={carousel}
//           className="inner"
//         >
//           {arrImgs.map((element, i) => (
//             <CardCarousel key={i} image={element} />
//           ))}
//         </motion.ul>
//       </StyledCarousel>
//       <button onClick={() => moveRigth()} className="right">
//         <AiOutlineLeft />
//       </button>
//     </div>
//   );
// };

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const arrImgs = [test, test, test, test, test, test, test, test, test];

const Carousel = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          966: {
            width: 966,
            slidesPerView: 3,
          },
          757: {
            width: 757,
            slidesPerView: 2,
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {arrImgs.map((element, i) => (
          <SwiperSlide key={i}>
            <img src={element} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
