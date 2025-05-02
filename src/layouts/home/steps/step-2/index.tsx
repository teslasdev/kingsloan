import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "../../../../components/buttons/Buttons";
import { TextInput } from "../../../../components/Inputs/TextInput";
import SelectInput from "../../../../components/selects/select-input/SelectInput";
import { useStepTwoChunk } from "./useStepTwoChunk.hook";

const Step2 = (props: any) => {
  const h = useStepTwoChunk(props);
  return (
    <form onSubmit={h.form.handleSubmit}>
      <div className="flex items-center justify-center mx-auto max-w-[1200px] w-full min-h-[80vh] p-4">
        <div
          className={`md:w-[846px] w-full min-h-[516px] p-6 bg-white shadow-lg rounded-[20px] flex flex-col transition-transform duration-500 border border-[#D7D7D780]`}
        >
          <h1 className="text-[24px] text-[#083B0B] font-[600]">
            Tell us about yourself
          </h1>
          <p className="text-[14px] font-[400] text-[#2E302E]">
            Give us proof that you exist with your names and a valid means of
            identification
          </p>

          <div className="py-6 flex gap-4">
            <div className="bg-[#FFCC00] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#FFCC00] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#D7D7D7] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#D7D7D7] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#D7D7D7] w-[145.2px] h-[8px] rounded-[100px]" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <TextInput
                name={h.form.fieldNames.firstName}
                value={h.form.formData.firstName}
                placeholder="Enter First Name"
                label={"First Name"}
                onChange={(e) => {
                  h.form.handleChange(e);
                  props.p.handleChange(e);
                }}
                validation={h.form.validationSchema?.firstName}
                validationTrigger={h.form.validationError}
              />
              <TextInput
                name={h.form.fieldNames.lastName}
                value={h.form.formData.lastName}
                placeholder="Enter Last Name"
                label={"Last Name"}
                onChange={(e) => {
                  h.form.handleChange(e);
                  props.p.handleChange(e);
                }}
                validation={h.form.validationSchema?.lastName}
                validationTrigger={h.form.validationError}
              />
            </div>
            <div className="flex items-center gap-4">
              <SelectInput
                label="Date of Birth"
                placeholder="Day"
                name={h.form.fieldNames.dayOfBirth}
                value={h.form.formData.dayOfBirth}
                onChange={(e) => {
                  h.form.handleChange(e);
                  props.p.handleChange(e);
                }}
                validation={h.form.validationSchema?.dayOfBirth}
                validationTrigger={h.form.validationError}
                options={h.dayOptions}
              />
              <SelectInput
                label=""
                placeholder="Month"
                name={h.form.fieldNames.monthOfBirth}
                value={h.form.formData.monthOfBirth}
                onChange={(e) => {
                  h.form.handleChange(e);
                  props.p.handleChange(e);
                }}
                validation={h.form.validationSchema?.monthOfBirth}
                validationTrigger={h.form.validationError}
                options={h.monthOptions}
              />
              <SelectInput
                label=""
                placeholder="Year"
                name={h.form.fieldNames.yearOfBirth}
                value={h.form.formData.yearOfBirth}
                onChange={(e) => {
                  h.form.handleChange(e);
                  props.p.handleChange(e);
                }}
                validation={h.form.validationSchema?.yearOfBirth}
                validationTrigger={h.form.validationError}
                options={h.yearOptions}
              />
            </div>

            <div className="flex items-center gap-4">
              <SelectInput
                label="Gender"
                placeholder="Select Gender"
                name={h.form.fieldNames.gender}
                value={h.form.formData.gender}
                onChange={(e) => {
                  h.form.handleChange(e);
                  props.p.handleChange(e);
                }}
                validation={h.form.validationSchema?.gender}
                validationTrigger={h.form.validationError}
                options={h.genderOptions}
              />
              <SelectInput
                label="Marital Status"
                placeholder="Select Status"
                name={h.form.fieldNames.maritalStatus}
                value={h.form.formData.maritalStatus}
                onChange={(e) => {
                  h.form.handleChange(e);
                  props.p.handleChange(e);
                }}
                validation={h.form.validationSchema?.maritalStatus}
                validationTrigger={h.form.validationError}
                options={h.maritalStatusOptions}
              />
            </div>

            <div className="flex items-center gap-4">
              <SelectInput
                label="Means of Identification"
                placeholder="Select means of identification"
                name={h.form.fieldNames.idType}
                value={h.form.formData.idType}
                onChange={(e) => {
                  h.form.handleChange(e);
                  props.p.handleChange(e);
                }}
                validation={h.form.validationSchema?.idType}
                validationTrigger={h.form.validationError}
                options={h.identificationOptions}
              />
              <TextInput
                label="Document Id"
                placeholder="Enter Id number"
                name={h.form.fieldNames.documentId}
                value={h.form.formData.documentId}
                onChange={(e) => {
                  h.form.handleChange(e);
                  props.p.handleChange(e);
                }}
                validation={h.form.validationSchema?.documentId}
                validationTrigger={h.form.validationError}
              />
            </div>
            <div className="flex items-center w-full justify-between">
              <Button
                className={
                  "flex items-center gap-4 text-[#083B0B] hover:text-white bg-transparent h-[52px] cursor-pointer"
                }
                onClick={h.handlePrevious}
              >
                <Icon icon={"meteor-icons:chevron-left"} />
                Previous
              </Button>
              <Button className={"w-[200px] h-[52px] cursor-pointer"}>
                Proceed
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Step2;
