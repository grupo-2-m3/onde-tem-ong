import React from "react";
import { BiDonateHeart } from "react-icons/bi";
import { StyledCard } from "./styled";
import bgDefaultImg from "../../assets/imgs/noBackgroundUser.jpg";
import userDefaultAvatar from "../../assets/imgs/noUserProfileUser.jpg";
import { iOng } from "../../pages/DashboardLoggedPage/DashboardLoggedPage";
import { Modal } from "../Modal/ModalGeneric/Modal";
import { ModalOng } from "../Modal/ModalOng";
import { ModalDonate } from "../Modal/ModalDonate";

const Card = ({ e, name, category, background, avatar, id, ...rest }: iOng) => {
  const imageOnErrorHandler = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.alt === "backgroundImage"
      ? (event.currentTarget.src = bgDefaultImg)
      : (event.currentTarget.src = userDefaultAvatar);

  };
  return (
    <StyledCard>
      <div className="backgroundAvatarDiv">
        <img
          onError={(e) => imageOnErrorHandler(e)}
          src={background ? background : bgDefaultImg}
          alt="backgroundImage"
          className="backgroundImg"
        />
      </div>
      <div className="ongInfoDiv">
        <div className="profileImgDiv">
          <img
            onError={(e) => imageOnErrorHandler(e)}
            src={avatar ? avatar : userDefaultAvatar}
            alt="Avatar"
            className="avatarImg"
          />
        </div>
        <div>
          <h2>{name?.charAt(0).toUpperCase() + name?.slice(1)}</h2>
          <p>{category?.charAt(0).toUpperCase() + category?.slice(1)}</p>
        </div>
      </div>
      <div className="helpBtnsDiv">
        <Modal
          button={
            <>
              <BiDonateHeart />
              Ajudar
            </>
          }
          title="Doação"
        >
          <ModalDonate />
        </Modal>

        <button id={String(id)}>Ver Mais</button>
      </div>
    </StyledCard>
  );
};

export default Card;
