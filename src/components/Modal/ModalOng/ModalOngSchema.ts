import * as yup from 'yup'

const OngSchema=yup.object().shape({
    name:yup
    .string(),

    bio: yup
    .string(),

    avatar: yup
    .string(),

    background: yup
    .string()

})

export{OngSchema}