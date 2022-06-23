import React from "react";
import FormInputGroup from "../components/FormInputGroup";

function Address({ formData, setFormData }) {
  return (
    <>
      <FormInputGroup
        type="text"
        label="Street"
        value={formData.street}
        onChange={(e) => setFormData({ ...formData, street: e.target.value })}
      />{" "}
      <FormInputGroup
        type="text"
        label="City"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
    </>
  );
}

export default Address;