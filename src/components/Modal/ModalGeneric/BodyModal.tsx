import { ModalBodyStyled, ModalDiv } from "./ModalStyled";
import React, { SetStateAction, useEffect, useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";

interface iModal {
  titulo: string;
  modalIsOpen: boolean;
  setModalOpen: React.Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

export const ModalBody = ({
  titulo,
  modalIsOpen,
  setModalOpen,
  children,
}: iModal) => {
  const refModal = useRef(null);

  const layoutHeight = window.screen.height;

  useEffect(() => {
    function modalOutClick(event: { target: any }) {
      const clique = event.target;
      const modal = refModal.current;
      if (clique.contains(modal)) {
        setModalOpen(false);
      }
    }
    if (modalIsOpen) {
      window.addEventListener("click", modalOutClick);

      return () => {
        window.removeEventListener("click", modalOutClick);
      };
    }
  }, [modalIsOpen, setModalOpen]);

  if (modalIsOpen && children) {
    return (
      <ModalBodyStyled ref={refModal}>
        <motion.div
          className="tt"
          initial={{ y: -layoutHeight }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ModalDiv>
            <div className="modalHeader">
              <p>{titulo}</p>
              <button onClick={() => setModalOpen(false)}>
                <AiFillCloseCircle className="iconClose" />
              </button>
            </div>
            {children}
          </ModalDiv>
        </motion.div>
      </ModalBodyStyled>
    );
  }
  return <></>;
};
