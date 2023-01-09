import { useContext, useEffect, useState } from "react";
import CoverProfile from "../../components/CoverProfile/CoverProfile";
import PencilBlack from "../../assets/imgs/PencilBlack.svg";
import Historic from "../../assets/imgs/Historic.svg";
import { ProfileOngStyled } from "./StyledProfileOngPage";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { Modal } from "../../components/Modal/ModalGeneric/Modal";
import { ModalOng } from "../../components/Modal/ModalOng";
import NoUser from "../../assets/imgs/noUser.svg";
import HeaderFull from "../../components/HeaderFull/HeaderFull";
import { UserContext } from "../../contexts/UserContext/UserContext";

const ProfileOngPage = () => {
  const [click, setClick] = useState(true);
  const { userInfo } = useContext(AuthContext);
  const { historicDonates, historicDonatesOngMain } = useContext(UserContext);

  const totalPrice = historicDonates.reduce((acc, value) => {
    return acc + Number(value.value);
  }, 0);

  useEffect(() => {
    historicDonatesOngMain();
  }, [userInfo]);

  return (
    <ProfileOngStyled>
      <HeaderFull linkText="ONGs" linkTo="/dashboard" />
      <CoverProfile />
      <div className="container">
        <div className="infoUser">
          <div className="InfoAndEdit">
            <h2>Informações</h2>
            <Modal
              title="Editar usuário"
              button={<img src={PencilBlack} alt="" />}
            >
              <ModalOng data={userInfo} />
            </Modal>
          </div>
          <p className="name">
            Nome:<span className="spanName"> {userInfo.name}</span>
          </p>
          <p className="bio">Bio:</p>
          <div className="bioContainer">
            <span className={`spanBio ${click && "vanish"}`}>
              {`${userInfo.bio} `}
            </span>

            {userInfo.id && userInfo.bio!.length > 100 && (
              <button className="seeMore" onClick={() => setClick(!click)}>
                {click ? "Ver mais" : "Ver menos"}
              </button>
            )}
          </div>
        </div>
        <div className="totalContainer">
          <div className="totalDiv">
            <h3 className="total">
              Total:{" "}
              <span>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(totalPrice)}
              </span>
            </h3>
            <img src={Historic} alt="" />
          </div>
          <div className="historicDonates">
            <ul>
              {historicDonates?.map((historic, index) => (
                <li key={index}>
                  {historic.public === false ? (
                    <div className="donorUser">
                      <img src={NoUser} alt="" />
                      <p>Usuário anônimo</p>
                    </div>
                  ) : (
                    <div className="donorUser">
                      <img src={historic.user.avatar} alt="" />
                      <p>{historic.user.name}</p>
                    </div>
                  )}

                  <span>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(historic.value)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ProfileOngStyled>
  );
};

export default ProfileOngPage;
