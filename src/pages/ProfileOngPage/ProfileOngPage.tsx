import { useContext } from "react";
import CoverProfile from "../../components/CoverProfile/CoverProfile";
import PencilBlack from "../../assets/imgs/PencilBlack.svg";
import { ProfileOngStyled } from "./StyledProfileOngPage";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Header } from "../../components/Header/Header";
import { Modal } from "../../components/Modal/ModalGeneric/Modal";
import { ModalOng } from "../../components/Modal/ModalOng/ModalOng";

const ProfileOngPage = () => {
  const { userInfo } = useContext(AuthContext);

  // const totalPrice = historicDonates.reduce((acc, value) => {
  //   return (acc + (value.value))
  // }, 0)

  return (
    <ProfileOngStyled>
      <Header />
      <CoverProfile />
      <div className="infoUser">
        <div className="InfoAndEdit">
          <h2>Informações</h2>
          <Modal
            title="Editar usuário"
            button={<img src={PencilBlack} alt="" />}
          >
            <ModalOng data={{ name: "ong", id: 1 }} />
          </Modal>
        </div>
        <p className="name">
          Nome:<span className="spanName"> {userInfo.name}</span>
        </p>
        <p className="bio">Bio:</p>
        <div className="bioContainer">
          <span className="spanBio">
            {userInfo.bio} Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum
          </span>
        </div>
      </div>
      <div className="totalDiv">
        {/* <h3 className="total">Total: {totalPrice}</h3> */}
        {/* <img src={Historic} alt="" /> */}
      </div>
      <div className="historicDonantes">
        <ul>
          {/* {historicDonates?.map((historic, index) => (
              <li key={index}>
                  <img src={NoUser} alt=""/>
                  <p>{}</p>
                  <span>{historic.value}</span>
              </li>
            ))} */}
        </ul>
      </div>
    </ProfileOngStyled>
  );
};

export default ProfileOngPage;
