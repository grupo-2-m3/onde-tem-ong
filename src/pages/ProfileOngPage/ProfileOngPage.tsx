import { useContext } from "react";
import CoverProfile from "../../components/CoverProfile/CoverProfile";
import PencilBlack from "../../assets/imgs/PencilBlack.svg";
import Historic from "../../assets/imgs/Historic.svg";
import { ProfileOngStyled } from "./StyledProfileOngPage";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const ProfileOngPage = () => {
  const { userInfo } = useContext(AuthContext);

  // const totalPrice = historicDonates.reduce((acc, value) => {
  //   return (acc + (value.value))
  // }, 0)

  return (
    <ProfileOngStyled>
      <CoverProfile />
      <div className="infoUser">
        <div className="InfoAndEdit">
          <h2>Informações</h2>
          <img src={PencilBlack} alt="" />
        </div>
        <h3 className="name">Nome: {userInfo.name}</h3>
        <h3 className="bio">Bio:</h3>
        <p>{userInfo.bio}</p>
      </div>
      <div className="totalDiv">
        {/* <h3 className="total">Total: {totalPrice}</h3> */}
        <img src={Historic} alt="" />
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
