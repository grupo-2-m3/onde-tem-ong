import { motion } from "framer-motion";
interface iCardCarousel {
  image: string;
}

export const CardCarousel = ({ image }: iCardCarousel) => {
  return (
    <>
      <motion.li className="iten">
        <img src={image} alt="magem da instituição" />
      </motion.li>
    </>
  );
};
