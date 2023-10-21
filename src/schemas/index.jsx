import * as yup  from "yup";

const basicSchema = yup.object().shape({
     pet_name: yup
        pet_age: "",
        male: "",
        female: "",
        date: "",
        owner_name: "",
})