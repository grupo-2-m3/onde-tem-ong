import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../Button/Button";
import { FormStyled } from "../../Forms/Form";
import { DonateSchema } from "./ModalDonateSchema";

interface iDonate {
  value: number;
  public: boolean
}

export const ModalDonate = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDonate>({
    resolver: yupResolver(DonateSchema),
  });


  function submit(data:iDonate){
    console.log(data)
  }

  return (
    <div>
      <FormStyled onSubmit={handleSubmit(submit)}>  
        <div>
          <label htmlFor="donate">Valor R$:</label>
          <input
            id="donate"
            required
            type="number"
            min={0}
            placeholder="valor"
            {...register('value')}
          />
          {errors.value?.message && <p>{errors.value.message}</p>}
        </div>
        <legend>Deseja doar anonimamente? </legend>
        <div>
          <div>
            <label htmlFor="yes">sim</label>
            <input
              type={"radio"}
              required
              id="yes"
              value="anonimo"
              {...register('public')}
            />
            {errors.public?.message && <p>{errors.public.message}</p>}
          </div>
          <div>
            <label htmlFor="no">não</label>
            <input type="radio" name="anonimo" id="no" value="public" />
          </div>
        </div>
        <Button styled={"empty curved"}>Doar</Button>
      </FormStyled>
    </div>
  );
};
