import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";
import Button from "../../Button/Button";
import { FormEditOngStyled } from "./ModalOngStyled";
import { OngSchema } from "./ModalOngSchema";

interface iFormOng {
  data: iOng;
}

interface iOng {
  name: string;
  bio?: string;
  avatar?: string;
  background?: string;
  id: number;
}

export const ModalOng = ({ data }: iFormOng) => {
  const { updateProfile } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iOng>({
    resolver: yupResolver(OngSchema),
  });

  return (
    <div>
      <FormEditOngStyled onSubmit={handleSubmit(updateProfile)}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            defaultValue={data.name}
            placeholder="Nome"
            {...register("name")}
          />
          {errors.name?.message && <p>{errors.name?.message}</p>}
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            id="bio"
            defaultValue={data.bio}
            placeholder="Bio"
            {...register("bio")}
          />
          {errors.bio?.message && <p>{errors.bio?.message}</p>}
        </div>
        <div>
          <label htmlFor="avatar">Avatar</label>
          <input
            type="url"
            id="avatar"
            defaultValue={data.avatar}
            placeholder="Avatar"
            {...register("avatar")}
          />
          {errors.avatar?.message && <p>{errors?.avatar?.message}</p>}
        </div>
        <div>
          <label htmlFor="background">Background</label>
          <input
            type="url"
            id="background"
            defaultValue={data.background}
            placeholder="Background"
            {...register("background")}
          />
          {errors.background?.message && <p>{errors?.background?.message}</p>}
        </div>
        <button className="submitEditOngBtn" type="submit">Editar</button>
      </FormEditOngStyled>
    </div>
  );
};
