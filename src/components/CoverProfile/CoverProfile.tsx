import CoverDefault from "../../assets/imgs/noBackgroundUser.jpg";
import UserDefault from "../../assets/imgs/noUserProfileUser.jpg";
import { CoverProfileStyled } from "./StyledCoverProfile";

interface ICoverProfile {
  imgCover?: string;
  imgUser?: string;
}
const CoverProfile = ({ imgCover, imgUser }: ICoverProfile) => {
  return (
    <CoverProfileStyled>
      {<img src={imgCover} alt="Img Cover" /> && (
        <img src={CoverDefault} alt="Cover Default" />
      )}
      <div className="imgUser">
        {<img src={imgUser} alt="Img User" /> && (
          <img src={UserDefault} alt="User Default" />
        )}
      </div>
    </CoverProfileStyled>
  );
};

export default CoverProfile;
