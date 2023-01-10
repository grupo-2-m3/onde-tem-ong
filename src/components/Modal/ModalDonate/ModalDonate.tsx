import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../Button/Button";
import { FormDonateStyled } from "./ModalDonateStyled";
import { DonateSchema } from "./ModalDonateSchema";

interface iDonate {
  value: number;
  public: boolean;
}

export const ModalDonate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDonate>({
    resolver: yupResolver(DonateSchema),
  });

  function submit(data: iDonate) {
    console.log(data);
  }
  
  const [checkedValue, setCheckedValue] = useState<string | null>("")
  function onChangeHandler(event: React.FormEvent<HTMLInputElement>) {
      setCheckedValue(event.currentTarget.value)
  }

  return (
    <div>
      <FormDonateStyled onSubmit={() => handleSubmit(submit)}>
        <div>
          <label htmlFor="donate">Valor R$:</label>
          <input
            id="donate"
            required
            type="number"
            min={0}
            placeholder="Valor"
            {...register("value")}
          />
          {errors.value?.message && <p>{errors.value.message}</p>}
        </div>
        <div className="radioFieldDiv">
          <label>Deseja doar anonimamente? </label>
          <div className="radios">
            <div>
            <label htmlFor="yes">Sim</label>
            <input
              type={"radio"}
              required
              id="yes"
              value="anonimo"
              {...register("public")}
              name="yes"
              checked={checkedValue === "anonimo"}
              onChange={onChangeHandler}
            />
            {errors.public?.message && <p>{errors.public.message}</p>}
            </div>
            <div>
          <label htmlFor="no">Não</label>
          <input type="radio" name="anonimo" id="no" value="public" checked={checkedValue === "public"} onChange={onChangeHandler}/>
          </div>
        </div>
        </div>
        <Button styled={"empty curved"}>Doar</Button>
      </FormDonateStyled>
    </div>
  );
};
