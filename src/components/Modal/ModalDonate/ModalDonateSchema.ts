import * as yup from 'yup'

const DonateSchema=yup.object().shape({
    value:yup.string().required(),

    anonimo:yup.string().required(),

})

export{DonateSchema}