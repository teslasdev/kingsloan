import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "../../../../components/buttons/Buttons";
import { TextInput } from "../../../../components/Inputs/TextInput";
import SelectInput from "../../../../components/selects/select-input/SelectInput";
import { useStepThreeChunk } from "./useStepThreeChunk.hook";

const Step3 = (props: any) => {
  const h = useStepThreeChunk(props);
  return (
    <form onSubmit={h.form.handleSubmit}>
      <div className="flex items-center justify-center mx-auto max-w-[1200px] w-full min-h-[80vh] p-4">
        <div
          className={`md:w-[846px] w-full min-h-[516px] p-6 bg-white shadow-lg rounded-[20px] flex flex-col transition-transform duration-500 border border-[#D7D7D780]`}
        >
          <h1 className="text-[24px] text-[#083B0B] font-[600]">
            How can we contact you?
          </h1>
          <p className="text-[14px] font-[400] text-[#2E302E]">
            Let us know how we can reach to you and your referees
          </p>

          <div className="py-6 flex gap-4">
            <div className="bg-[#FFCC00] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#FFCC00] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#FFCC00] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#D7D7D7] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#D7D7D7] w-[145.2px] h-[8px] rounded-[100px]" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <TextInput
                name={h.form.fieldNames.emailAddress}
                value={h.form.formData.emailAddress}
                placeholder="Enter address"
                label={"Email address"}
                onChange={h.form.handleChange}
                validation={h.form.validationSchema?.emailAddress}
                validationTrigger={h.form.validationError}
              />
              <TextInput
                name={h.form.fieldNames.phoneNumber}
                value={h.form.formData.phoneNumber}
                placeholder="Enter Phone number"
                label={"Phone number"}
                onChange={h.form.handleChange}
                validation={h.form.validationSchema?.phoneNumber}
                validationTrigger={h.form.validationError}
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[114px]">
                <TextInput
                  label="House number"
                  placeholder="Day"
                  name={h.form.fieldNames.houseNumber}
                  value={h.form.formData.houseNumber}
                  onChange={h.form.handleChange}
                  validation={h.form.validationSchema?.houseNumber}
                  validationTrigger={h.form.validationError}
                />
              </div>

              <TextInput
                label="Full residential address"
                placeholder="Enter full Address"
                name={h.form.fieldNames.fullAddress}
                value={h.form.formData.fullAddress}
                onChange={h.form.handleChange}
                validation={h.form.validationSchema?.fullAddress}
                validationTrigger={h.form.validationError}
              />
            </div>

            <div className="flex gap-4 flex-col w-full">
              <h1 className="text-[20px] mb-2 text-[#083B0B] font-[600]">
                Referee 1
              </h1>
              <div className="flex items-center gap-4 w-full">
                <TextInput
                  label="First Name"
                  placeholder="Enter First Name"
                  name={h.form.fieldNames.referee1firstName}
                  value={h.form.formData.referee1firstName}
                  onChange={h.form.handleChange}
                  validation={h.form.validationSchema?.referee1firstName}
                  validationTrigger={h.form.validationError}
                />
                <TextInput
                  label="Last Name"
                  placeholder="Enter Last Name"
                  name={h.form.fieldNames.referee1lastName}
                  value={h.form.formData.referee1lastName}
                  onChange={h.form.handleChange}
                  validation={h.form.validationSchema?.referee1firstName}
                  validationTrigger={h.form.validationError}
                />
              </div>

              <div className="flex items-center gap-4 w-full">
                <SelectInput
                  label="Relationship"
                  placeholder="Select Relationship"
                  name={h.form.fieldNames.referee1Relationship}
                  value={h.form.formData.referee1Relationship}
                  onChange={h.form.handleChange}
                  validation={h.form.validationSchema?.referee1Relationship}
                  validationTrigger={h.form.validationError}
                  options={h.relationshipOptions}
                />
                <TextInput
                  label="Phone number"
                  placeholder="Enter Phone number"
                  name={h.form.fieldNames.referee1PhoneNumber}
                  value={h.form.formData.referee1PhoneNumber}
                  onChange={h.form.handleChange}
                  validation={h.form.validationSchema?.referee1PhoneNumber}
                  validationTrigger={h.form.validationError}
                />
              </div>
            </div>

            <div className="flex gap-4 flex-col w-full">
              <h1 className="text-[20px] mb-2 text-[#083B0B] font-[600]">
                Referee 2
              </h1>
              <div className="flex items-center gap-4 w-full">
                <TextInput
                  label="First Name"
                  placeholder="Enter First Name"
                  name={h.form.fieldNames.referee2firstName}
                  value={h.form.formData.referee2firstName}
                  onChange={h.form.handleChange}
                  validation={h.form.validationSchema?.referee2firstName}
                  validationTrigger={h.form.validationError}
                />
                <TextInput
                  label="Last Name"
                  placeholder="Enter Last Name"
                  name={h.form.fieldNames.referee2lastName}
                  value={h.form.formData.referee2lastName}
                  onChange={h.form.handleChange}
                  validation={h.form.validationSchema?.referee2lastName}
                  validationTrigger={h.form.validationError}
                />
              </div>

              <div className="flex items-center gap-4 w-full">
                <SelectInput
                  label="Relationship"
                  placeholder="Select Relationship"
                  name={h.form.fieldNames.referee2Relationship}
                  value={h.form.formData.referee2Relationship}
                  onChange={h.form.handleChange}
                  validation={h.form.validationSchema?.referee2Relationship}
                  validationTrigger={h.form.validationError}
                  options={h.relationshipOptions}
                />
                <TextInput
                  label="Phone number"
                  placeholder="Enter Phone number"
                  name={h.form.fieldNames.referee2PhoneNumber}
                  value={h.form.formData.referee2PhoneNumber}
                  onChange={h.form.handleChange}
                  validation={h.form.validationSchema?.referee2PhoneNumber}
                  validationTrigger={h.form.validationError}
                />
              </div>
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

export default Step3;
