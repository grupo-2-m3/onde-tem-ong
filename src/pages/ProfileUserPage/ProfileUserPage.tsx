import { useContext, useEffect } from "react";
import CoverProfile from "../../components/CoverProfile/CoverProfile";
import HeaderFull from "../../components/HeaderFull/HeaderFull";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { StyledProfileUser } from "./StyledProfileUser";
import PencilBlack from "../../assets/imgs/PencilBlack.svg";
import Historic from "../../assets/imgs/Historic.svg";
import { UserContext } from "../../contexts/UserContext/UserContext";
import NoUser from "../../assets/imgs/noUser.svg";

const ProfileUserPage = () => {
  const { userInfo } = useContext(AuthContext);
  const { userDonate, getDonateUser } = useContext(UserContext);

  const totalPrice = userDonate.reduce((acc, value) => {
    return acc + Number(value.value);
  }, 0);

  useEffect(() => {
    getDonateUser();
  }, [userInfo]);

  return (
    <StyledProfileUser>
      <HeaderFull linkText={"Dashboard Ongs"} linkTo={"/dashboard"} />
      <CoverProfile imgCover={userInfo.background} imgUser={userInfo.avatar} />
      <div className="infoUser container">
        <div className="infoEdit">
          <h3 className="name">Nome: {userInfo.name}</h3>
          <img src={PencilBlack} alt="" />
        </div>
        <div className="historicDonates">
          <img src={Historic} alt="" />
          <p>Histórico de Doações</p>
          <span>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(totalPrice)}
          </span>
        </div>
        <ul>
          {userDonate?.map((donate, index) => (
            <li key={index}>
              {donate.ong.avatar === "" ? (
                <img src={NoUser} alt="" />
              ) : (
                <img src={donate.ong.avatar} alt="" />
              )}
              <h3>{donate.ong.name}</h3>
              <span>{donate.ong.bio}</span>
              <p>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(donate.value)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </StyledProfileUser>
  );
};

export default ProfileUserPage;
