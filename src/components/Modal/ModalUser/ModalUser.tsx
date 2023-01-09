import React from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import Button from "../../Button/Button"
import { FormStyled } from "../../Forms/Form"
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
    password:string,
    email:string,
    confirmPassword:string
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
            <FormStyled onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" defaultValue={data.name} placeholder="Nome" {...register('name')} />
                    {errors.name?.message && <p>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="bio" defaultValue={data.bio} placeholder="Bio" {...register('email')}/>
                    {errors.email?.message && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" defaultValue={data.password} placeholder="Bio" {...register('password')}/>
                    {errors.password?.message && <p>{errors.password.message}</p>}
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirmar senha</label>
                    <input type="password" id="confirmPassword" defaultValue={data.password} placeholder="Bio" {...register('confirmPassword')}/>
                    {errors.confirmPassword?.message && <p>{errors.confirmPassword.message}</p>}
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
            </FormStyled>
        </div>
    )
}