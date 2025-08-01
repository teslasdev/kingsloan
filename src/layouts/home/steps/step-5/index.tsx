import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "../../../../components/buttons/Buttons";
import { TextInput } from "../../../../components/Inputs/TextInput";
import SelectInput from "../../../../components/selects/select-input/SelectInput";
import { useStepFiveChunk } from "./useStepFiveChunk.hook";
import Loader from "../../../../assets/loader.gif";
import Alert from "../../../../components/alerts/Alert";

const Step5 = (props: any) => {
  const h = useStepFiveChunk(props);
  return (
    <form onSubmit={h.form.handleSubmit}>
      <div className="flex relative items-center justify-center mx-auto max-w-[1200px] w-full min-h-[80vh] p-4">
        <div
          className={`md:w-[846px] relative w-full min-h-[516px] p-6 bg-white shadow-lg rounded-[20px] flex flex-col transition-transform duration-500 border border-[#D7D7D780]`}
        >
          {h.isLoading && (
            /* <div className="absolute inset-0 w-full h-full z-30 backdrop-blur-xs rounded-md">
               <ProgressLoader isLoading={h.isLoading} /> 
            </div> */
            <div className="absolute flex justify-center items-center flex-col inset-0 w-full h-full z-30 bg-white rounded-md">
              {/* <ProgressLoader isLoading={h.isLoading} /> */}
              <img src={Loader} className="w-[300px] h-[300px]" />
              <h3 className="text-[#002266] font-[600] text-[24px]">
                Your loan is processing
              </h3>
              <p className="text-[14px] font-[400] text-[#002266]">
                We are trying to verify your personal and financial informations
                before we proceed to giving you a loan
              </p>

              <button className="text-[16px] mt-6 font-[500] text-[#14961D]">
                Cancel
              </button>
            </div>
          )}
          <h1 className="text-[24px] text-[#002266] font-[600]">
            How do we pay you?
          </h1>
          <p className="text-[14px] font-[400] text-[#002266]">
            Provide your BVN and a bank details connected to your BVN
          </p>

          <div className="py-6 flex gap-4">
            <div className="bg-[#FFCC00] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#FFCC00] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#FFCC00] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#FFCC00] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#FFCC00] w-[145.2px] h-[8px] rounded-[100px]" />
          </div>
          {h.message.visible && (
          <Alert
            type={h.message.type}
            title={h.message.title}
            message={h.message.message}
          />
          )}

          <div className="flex flex-col gap-4 mt-2">
            <TextInput
              name={h.form.fieldNames.bvn}
              value={h.form.formData.bvn}
              label="Bank verification number (BVN)"
              placeholder={"Enter BVN"}
              onChange={(e) => {
                h.form.handleChange(e);
                props.p.handleChange(e);
              }}
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
                onChange={(e) => {
                  h.form.handleChange(e);
                  props.p.handleChange(e);
                }}
                validation={h.form.validationSchema?.accountNumber}
                validationTrigger={h.form.validationError}
              />
              <SelectInput
                label="Bank Name"
                placeholder="Select Bank"
                name={h.form.fieldNames.bankName}
                value={h.form.formData.bankName}
                onChange={(e) => {
                  h.form.handleChange(e);
                  props.p.handleChange(e);
                }}
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
                onChange={(e: any) =>
                  // h.form.handleChange({
                  //   field: h.form.fieldNames.acceptTerms,
                  //   value: e.target.checked as any,
                  // })
                  {
                    console.log(e);
                  }
                }
              />
              <p className="text-[14px] font-[400] text-[#002266]">
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
                  "flex items-center gap-4 text-[#002266] hover:text-white bg-transparent h-[52px] cursor-pointer"
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
