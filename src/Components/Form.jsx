import { useFormik } from "formik";

const Form = () => {

  const { values, handleBlur, handleChange } = useFormik({
    initialValues: {
        pet_name: "",
        pet_age: "",
        male: "",
        female: "",
        date: "",
        owner_name: "",


    },
  });

  return (
    <form autoComplete="off" className="form-card">
      <label htmlFor="pet_name">The Pet's Name</label>
      <input
        id= "pet_name"
        type="text"
        placeholder="Pet Name"
        value={values.pet_name}
        onChange={handleChange}
        onBlur={handleBlur}
      />

<label htmlFor="pet_age">The Pet's Age</label>

      <input

        id= "pet_age"
        type="number"
        placeholder="Pet's Age"
        value={values.pet_age}
        onChange={handleChange}
        onBlur={handleBlur}
      />

<label htmlFor="male">Male Pet</label>
      <input
        id= "male"
        type="radio"
        name="male"
       
        value={values.male}
        onChange={handleChange}
        onBlur={handleBlur}
      />

<label htmlFor="female">Female Pet</label>
      <input
        id= "female"
        type="radio"
        name="female"
       
        value={values.female}
        onChange={handleChange}
        onBlur={handleBlur}
      />
<label htmlFor="date">Date of appointment</label>
      <input
        id= "date"
        type="date"
        placeholder="Date"
        value={values.date}
        onChange={handleChange}
        onBlur={handleBlur}
      />


<label htmlFor="owner_name">Owner's name</label>
      <input
        id= "owner_name"
        type="text"
        placeholder="owner's name"
        value={values.owner_name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button type="submit">To register </button>
    </form>
  );
};

export default Form;
