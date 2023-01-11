import React, { useState } from "react";
import Button from "../../Button/Button";
import { ModalBody } from "./BodyModal";
import { ModalStyled } from "./ModalStyled";

interface iOpenModal {
  children: React.ReactNode;
  title: string;
  button?: string | React.ReactNode;
}

export function Modal({ children, title, button }: iOpenModal) {
  const [modal, setModal] = useState(false);
  if (typeof button === "object") {
    return (
      <ModalStyled>
        <button className="withoutBorder" onClick={() => setModal(true)}>
          {button}
        </button>
        <ModalBody titulo={title} modalIsOpen={modal} setModalOpen={setModal}>
          {children}
        </ModalBody>
      </ModalStyled>
    );
  } else {
    return (
      <ModalStyled>
        <Button styled={"empty"} onClick={() => setModal(true)}>
          {button || title}
        </Button>
        <ModalBody titulo={title} modalIsOpen={modal} setModalOpen={setModal}>
          {children}
        </ModalBody>
      </ModalStyled>
    );
  }
}
