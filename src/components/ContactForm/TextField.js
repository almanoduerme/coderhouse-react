import React from "react";
import { useField, ErrorMessage } from "formik";

const TextField = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <div className="TextField">
      <label htmlFor={field.name}>{label}</label>
      <input {...field} {...props} autoComplete="off" />
      {ErrorMessage && <ErrorMessage name={field.name} />}
    </div>
  );
};

export default TextField;
