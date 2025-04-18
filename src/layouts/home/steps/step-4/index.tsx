import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "../../../../components/buttons/Buttons";
import { TextInput } from "../../../../components/Inputs/TextInput";
import SelectInput from "../../../../components/selects/select-input/SelectInput";
import { useStepFourChunk } from "./useStepFourChunk.hook";

const Step4 = (props: any) => {
  const h = useStepFourChunk(props);
  return (
    <form onSubmit={h.form.handleSubmit}>
      <div className="flex items-center justify-center mx-auto max-w-[1200px] w-full min-h-[80vh] p-4">
        <div
          className={`md:w-[846px] w-full min-h-[516px] p-6 bg-white shadow-lg rounded-[20px] flex flex-col transition-transform duration-500 border border-[#D7D7D780]`}
        >
          <h1 className="text-[24px] text-[#083B0B] font-[600]">
            What do you do?
          </h1>
          <p className="text-[14px] font-[400] text-[#2E302E]">
            Let us know about your work
          </p>

          <div className="py-6 flex gap-4">
            <div className="bg-[#FFCC00] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#FFCC00] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#FFCC00] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#FFCC00] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#D7D7D7] w-[145.2px] h-[8px] rounded-[100px]" />
          </div>

          <div className="flex flex-col gap-4">
            <SelectInput
              label="Employment status"
              placeholder="Select employment status"
              name={h.form.fieldNames.employmentStatus}
              value={h.form.formData.employmentStatus}
              options={h.jobApplicationStatusOptions}
              onChange={(e) => {
                h.form.handleChange(e)
                props.p.handleChange(e)
              }}
              validation={h.form.validationSchema?.employmentStatus}
              validationTrigger={h.form.validationError}
            />
            <div className="flex items-center gap-4">
              <TextInput
                name={h.form.fieldNames.companyName}
                value={h.form.formData.companyName}
                placeholder="Enter name"
                label={"Organisation/company name"}
                onChange={(e) => {
                h.form.handleChange(e)
                props.p.handleChange(e)
              }}
                validation={h.form.validationSchema?.companyName}
                validationTrigger={h.form.validationError}
              />
              <TextInput
                name={h.form.fieldNames.businessName}
                value={h.form.formData.businessName}
                placeholder="Name of business"
                label={"Enter business name"}
                onChange={(e) => {
                h.form.handleChange(e)
                props.p.handleChange(e)
              }}
                validation={h.form.validationSchema?.businessName}
                validationTrigger={h.form.validationError}
              />
            </div>

            <div className="flex items-center gap-4">
              <TextInput
                name={h.form.fieldNames.role}
                value={h.form.formData.role}
                placeholder="Enter Role"
                label={"Position/role"}
                onChange={(e) => {
                h.form.handleChange(e)
                props.p.handleChange(e)
              }}
                validation={h.form.validationSchema?.role}
                validationTrigger={h.form.validationError}
              />
              <TextInput
                name={h.form.fieldNames.workEmail}
                value={h.form.formData.workEmail}
                placeholder="Work email address"
                label={"Enter Work email address"}
                onChange={(e) => {
                h.form.handleChange(e)
                props.p.handleChange(e)
              }}
                validation={h.form.validationSchema?.workEmail}
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

export default Step4;
