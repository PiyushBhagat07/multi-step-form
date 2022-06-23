import React from "react";
import FormInputGroup from "../components/FormInputGroup";
function PersonalInfo({ formData, setFormData }) {
  return (
    <>
      <FormInputGroup
        label="First name"
        type="text"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
      />{" "}
      <FormInputGroup
        label="Last name"
        type="text"
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      <FormInputGroup
        label="User name"
        type="text"
        value={formData.userName}
        onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
      />
    </>
  );
}

export default PersonalInfo;