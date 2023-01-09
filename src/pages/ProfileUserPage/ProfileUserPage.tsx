import { useContext } from "react";
import CoverProfile from "../../components/CoverProfile/CoverProfile";
import { Header } from "../../components/Header/Header";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { StyledProfileUser } from "./StyledProfileUser";
import {MdEdit as IconEdit} from "react-icons/md"
import HistoryList from "./HistoryList";



const ProfileUserPage = () => {
  const { userInfo } = useContext(AuthContext);
  return (
    <StyledProfileUser>
      <Header/>
      <CoverProfile />
      <div className="infoUser container">
      <h3 className="name">Nome: {userInfo.name}</h3>
      <IconEdit className="iconEdit"/>
      </div>
      <HistoryList/>

    </StyledProfileUser>
  );
};

export default ProfileUserPage;
