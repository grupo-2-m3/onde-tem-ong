import React from "react"
import Button from "../Button/Button"
import { FormStyled } from "../Forms/Form"

interface iFormOng{
    data:any
}

export const ModalOng=({data}:iFormOng)=>{
    return(
        <div>
            <FormStyled>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" defaultValue={data.name} placeholder="Nome"/>
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <input type="text" id="bio" defaultValue={data.bio} placeholder="Bio" />
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