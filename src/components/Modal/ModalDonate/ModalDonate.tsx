import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormDonateStyled } from "./ModalDonateStyled";
import { DonateSchema } from "./ModalDonateSchema";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";
import { api } from "../../../services/api";
import { iOng } from "../../../contexts/UserContext/UserContext";

interface iDonate {
  value: number;
  public: string;
}

interface iProps {
  ongId: number;
  ongName: string;
  ongAvatar: string;
  // userId: number;
  // userName: string;
  // userAvatar: string;
}

export const ModalDonate = ({ ongId, ongName, ongAvatar }: iProps) => {
  const { userInfo } = useContext(AuthContext);
  const [ong, setOng] = useState<null | iOng>(null);

  const getInfoOng = async () => {
    console.log(ongId);

    try {
      const response = await api.get(`/users/${ongId}`);
      setOng(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfoOng();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDonate>({
    resolver: yupResolver(DonateSchema),
  });

  async function submit(data: iDonate) {
    console.log("oi");
    console.log(data.public);
    try {
      const response = await api.post("/donates", {
        ong: {
          ongId: ong?.id,
          name: ong?.name,
          avatar: ong?.avatar ? ong.avatar : "",
          bio: ong?.bio,
        },
        user: {
          userId: userInfo.id,
          name: userInfo.name,
          avatar: userInfo.avatar,
        },
        value: data.value,
        public: data.public === "yes" ? true : false,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const [checkedValue, setCheckedValue] = useState<string | null>("");
  function onChangeHandler(event: React.FormEvent<HTMLInputElement>) {
    setCheckedValue(event.currentTarget.value);
  }

  return (
    <div>
      <FormDonateStyled onSubmit={handleSubmit(submit)}>
        <div className="valueDiv">
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
                type="radio"
                id="yes"
                value="yes"
                {...register("public")}
                /* checked={checkedValue === "anonimo"} */
                onChange={onChangeHandler}
              />
              {errors.public?.message && <p>{errors.public.message}</p>}
            </div>
            <div>
              <label htmlFor="no">Não</label>
              <input
                type="radio"
                id="no"
                value="no"
                {...register("public")}
                /* checked={checkedValue === "public"} */
                onChange={onChangeHandler}
              />
            </div>
          </div>
        </div>
        <button disabled={ong ? false : true} id={String(ongId)}>
          Doar
        </button>
      </FormDonateStyled>
    </div>
  );
};
