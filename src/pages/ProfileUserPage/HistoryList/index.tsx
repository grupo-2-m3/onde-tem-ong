import React from "react";
import { GrHistory as IconHistory } from "react-icons/gr";
import { StyledHistoryList } from "./StyledHistoryList";

const HistoryList = () => {
  return (
    <StyledHistoryList>
      <div className="headerHistory container">
        <div>
          <IconHistory className="iconHistory" />
          <h3>Histórico de doações</h3>
        </div>
        <h3>Total: R$</h3>
      </div>
      <ul>

      </ul>
    </StyledHistoryList>

// const getUserDonation = async <iUserDonation> () => {
//     const token = localStorage.getItem("@token");
//       const id = localStorage.getItem("@id");
//       const {data} = await api.get(`/users/donate/${id}`,{
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setUserDonation(data)
     
    
//   }
  );
};

export default HistoryList;
