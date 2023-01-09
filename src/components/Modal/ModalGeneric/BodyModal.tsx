import { ModalBodyStyled, ModalDiv } from "./ModalStyled";
import React, { SetStateAction, useEffect, useRef} from "react";

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
  const refModal=useRef(null)
  useEffect(()=>{
    function modalOutClick(event: { target: any; }){
      const clique=event.target
      const modal=refModal.current
      if(clique.contains(modal)){
        setModalOpen(false)
      }
    }
    if(modalIsOpen){
      window.addEventListener('click',modalOutClick)
      
      return()=>{
        window.removeEventListener('click',modalOutClick)
      }

    }
  },[modalIsOpen, setModalOpen])

  if (modalIsOpen && children) {
    return (
      <ModalBodyStyled ref={refModal}>
        <ModalDiv>
          <div className="modal-header">
            <p>{titulo}</p>
            <button onClick={() => setModalOpen(false)}>X</button>
          </div>
          {children}
        </ModalDiv>
      </ModalBodyStyled>
    );
  }
  return <></>;
};
