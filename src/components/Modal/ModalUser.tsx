import React from "react"
import Button from "../Button/Button"
import { FormStyled } from "../Forms/Form"

interface iFormUser{
    data:any
}

export const ModalOng=({data}:iFormUser)=>{
    return(
        <div>
            <FormStyled>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" defaultValue={data.name} placeholder="Nome"/>
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input type="text" id="bio" defaultValue={data.bio} placeholder="Bio" />
                </div>
                <div>
                    <label htmlFor="password">email</label>
                    <input type="password" id="password" defaultValue={data.bio} placeholder="Bio" />
                </div>
                <div>
                    <label htmlFor="confirmPassword">email</label>
                    <input type="password" id="confirmPassword" defaultValue={data.bio} placeholder="Bio" />
                </div>
                <div>
                    <label htmlFor="avatar">Avatar</label>
                    <input type="url" id="avatar" defaultValue={data.avatar} placeholder="Avatar" />
                </div>
                <div>
                    <label htmlFor="background">Background</label>
                    <input type="url" id="background" defaultValue={data.background} placeholder="Background" />
                </div>
                <Button styled={'empty curved'} type="submit">Editar</Button>
            </FormStyled>
        </div>
    )
}