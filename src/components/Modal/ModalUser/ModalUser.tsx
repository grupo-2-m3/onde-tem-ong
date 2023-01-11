import React from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import Button from "../../Button/Button"
import { FormEditUserStyled } from "../../Forms/Form"
import { UserSchema } from "./ModalUserSchema"

interface iFormUser{
    data:iUser
}

interface iUser {
    name: string;
    bio?: string;
    avatar?: string;
    background?: string;
    id:number,
}
  
export const ModalUser=({data}:iFormUser)=>{

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<iUser>({
        resolver: yupResolver(UserSchema),
      });

      function submit(data:iUser){
        console.log(data)
      }

    return(
        <div>
            <FormEditUserStyled onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" defaultValue={data.name} placeholder="Nome" {...register('name')} />
                    {errors.name?.message && <p>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="avatar">Avatar</label>
                    <input type="url" id="avatar" defaultValue={data.avatar} placeholder="Avatar" {...register('avatar')} />
                    {errors.avatar?.message && <p>{errors.avatar.message}</p>}
                </div>
                <div>
                    <label htmlFor="background">Background</label>
                    <input type="url" id="background" defaultValue={data.background} placeholder="Background" {...register('background')} />
                    {errors.background?.message && <p>{errors.background.message}</p>}
                </div>
                <Button styled={'empty curved'} type="submit">Editar</Button>
            </FormEditUserStyled>
        </div>
    )
}