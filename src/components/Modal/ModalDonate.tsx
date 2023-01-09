import React from "react"
import Button from "../Button/Button"
import { FormStyled } from "../Forms/Form"

export const ModalDonate=()=>{
    return(
        <div>
            <FormStyled>
                <div>
                    <label htmlFor="donate">Valor R$:</label>
                    <input id="donate" name="donate" required type="number" min={0} placeholder="valor"/>
                </div>
                    <legend>Deseja doar anonimamente? </legend>
                <div>
                    <div>
                        <label htmlFor="yes">sim</label>
                        <input type={"radio"} required name="anonimo" id="yes" value="anonimo"/>
                    </div>
                    <div>
                        <label htmlFor="no">não</label>
                        <input type="radio" name="anonimo" id="no" value="public" />
                    </div>
                </div>
                <Button styled={"empty curved"} >Doar</Button>
            </FormStyled>
        </div>
    )
}