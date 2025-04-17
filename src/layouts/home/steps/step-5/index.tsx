import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "../../../../components/buttons/Buttons";
import { TextInput } from "../../../../components/Inputs/TextInput";
import SelectInput from "../../../../components/selects/select-input/SelectInput";
import { useStepFiveChunk } from "./useStepFiveChunk.hook";

const Step5 = (props: any) => {
  const h = useStepFiveChunk(props);
  return (
    <form onSubmit={h.form.handleSubmit}>
      <div className="flex items-center justify-center mx-auto max-w-[1200px] w-full min-h-[80vh] p-4">
        <div
          className={`md:w-[846px] w-full min-h-[516px] p-6 bg-white shadow-lg rounded-[20px] flex flex-col transition-transform duration-500 border border-[#D7D7D780]`}
        >
          <h1 className="text-[24px] text-[#083B0B] font-[600]">
            How do we pay you?
          </h1>
          <p className="text-[14px] font-[400] text-[#2E302E]">
            Provide your BVN and a bank details connected to your BVN
          </p>

          <div className="py-6 flex gap-4">
            <div className="bg-[#FFCC00] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#FFCC00] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#FFCC00] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#FFCC00] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#FFCC00] w-[145.2px] h-[8px] rounded-[100px]" />
          </div>

          <div className="flex flex-col gap-4">
            <TextInput
              name={h.form.fieldNames.bvn}
              value={h.form.formData.bvn}
              label="Bank verification number (BVN)"
              placeholder={"Enter BVN"}
              onChange={h.form.handleChange}
              validation={h.form.validationSchema?.bvn}
              validationTrigger={h.form.validationError}
            />

            <div className="flex items-center gap-4">
              <TextInput
                name={h.form.fieldNames.accountNumber}
                type="number"
                maxLength={10}
                value={h.form.formData.accountNumber}
                placeholder="Account Number"
                label={"Enter Account Number"}
                onChange={h.form.handleChange}
                validation={h.form.validationSchema?.accountNumber}
                validationTrigger={h.form.validationError}
              />
              <SelectInput
                label="Bank Name"
                placeholder="Select Bank"
                name={h.form.fieldNames.bankName}
                value={h.form.formData.bankName}
                onChange={h.form.handleChange}
                validation={h.form.validationSchema?.bankName}
                validationTrigger={h.form.validationError}
                options={h.nigeriaBankOptions}
              />
            </div>

            <p>Account NUMBER Appear Here</p>
            <div className="flex  gap-4 items-start">
              <input
                id="acceptTerms" // Add this
                type="checkbox"
                className="checked:border-amber-600 mt-3"
                name={h.form.fieldNames.acceptTerms}
                checked={h.form.formData.acceptTerms || false}
                onChange={(e) => h.form.handleChange({field : h.form.fieldNames.acceptTerms, value : e.target.checked.toString()})}
              />
              <p className="text-[14px] font-[400] text-[#2E302E]">
                By proceeding, you agree to our Terms and Conditions, authorise
                us to verify your personal and financial information, understand
                that loan approval is subject to eligibility and credit
                assessment, acknowledge that failure to repay may result in
                legal action, accept that defaulting can affect your
                creditworthiness, and consent to our data privacy, processing,
                and repayment policies.
              </p>
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

export default Step5;
