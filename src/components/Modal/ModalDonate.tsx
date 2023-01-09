import React from "react";
import Button from "../Button/Button";
import { FormStyled } from "../Forms/Form";

export const ModalDonate = () => {
  return (
    <div>
      <FormStyled>
        <div className="valueDiv">
          <label htmlFor="donate">Valor (R$):</label>
          <input
            id="donate"
            name="donate"
            required
            type="number"
            min={0}
            placeholder="Valor"
          />
        </div>
        <div className="optionDiv">
          <span>Deseja doar anonimamente? </span>
          <div>
            <div>
              <label htmlFor="yes">Sim</label>
              <input
                type={"radio"}
                required
                name="anonimo"
                id="yes"
                value="anonimo"
              />
            </div>
            <div>
              <label htmlFor="no">Não</label>
              <input type="radio" name="anonimo" id="no" value="public" />
            </div>
          </div>
        </div>
        <Button styled={"empty curved"} className="makeDonation">
          Doar
        </Button>
      </FormStyled>
    </div>
  );
};
