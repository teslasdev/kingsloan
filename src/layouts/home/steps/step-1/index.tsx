import { Button } from "../../../../components/buttons/Buttons";
import { TextInput } from "../../../../components/Inputs/TextInput";
import ProgressLoader from "../../../../components/Loader";
import SelectInput from "../../../../components/selects/select-input/SelectInput";
import { useStepOneChunk } from "./useStepOneChunk.hook";

const Step1 = (props: any) => {
  const p = useStepOneChunk(props);
  return (
    <form onSubmit={p.form.handleSubmit}>
      
      <div className="flex items-center justify-center mx-auto max-w-[1200px] w-full min-h-[80vh] p-4">
        <div
          className={`md:w-[846px] relative w-full min-h-[516px] p-6 bg-white shadow-lg rounded-[20px] flex flex-col transition-transform duration-500 border border-[#D7D7D780]`}
        >
          {p.isLoading && (
            <div className="absolute inset-0 w-full h-full z-30 backdrop-blur-xs rounded-md">
              <ProgressLoader isLoading={p.isLoading} />
            </div>
          )}
          <h1 className="text-[24px] text-[#083B0B] font-[600]">
            How much do you want to loan?
          </h1>
          <p className="text-[14px] font-[400] text-[#2E302E]">
            Input the amount you want to loan over a period of time and view
            your repayment amount.
          </p>

          <div className="py-6 flex gap-4">
            <div className="bg-[#FFCC00] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#D7D7D7] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#D7D7D7] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#D7D7D7] w-[145.2px] h-[8px] rounded-[100px]" />
            <div className="bg-[#D7D7D7] w-[145.2px] h-[8px] rounded-[100px]" />
          </div>

          <div className="flex flex-col gap-4">
            <TextInput
              name={p.form.fieldNames.loanAmount}
              value={p.form.formData.loanAmount || props.p.application.loanAmount || ""}
              placeholder="How much do you want to loan?"
              label={"Loan Amount"}
              onChange={(e) => {
                p.form.handleChange(e);
                props.p.handleChange(e);
              }}
              validation={p.form.validationSchema?.loanAmount}
              validationTrigger={p.form.validationError}
            />
            <SelectInput
              label="Loan purpose"
              placeholder="Select loan purpose"
              name={p.form.fieldNames.loanPurpose}
              value={p.form.formData.loanPurpose || props.p.application.loanPurpose || ""}
              options={p.loanPurposeOptions}
              onChange={(e) => {
                p.form.handleChange(e);
                props.p.handleChange(e);
              }}
              validation={p.form.validationSchema?.loanPurpose}
              validationTrigger={p.form.validationError}
            />

            <SelectInput
              label="Duration"
              placeholder="Select Duration"
              name={p.form.fieldNames.durationInMonths}
              value={p.form.formData.durationInMonths || props.p.application.durationInMonths || ""}
              options={p.loanDurationOptions}
              onChange={(e) => {
                p.form.handleChange(e);
                props.p.handleChange(e);
              }}
              validation={p.form.validationSchema?.durationInMonths}
              validationTrigger={p.form.validationError}
            />
            {!p.isFormEmpty && (
              <div className="bg-[#F6FEF7] p-6 flex justify-between items-center">
                <div>
                  <h4 className="font-[600] text-[#083B0B] text-[20px]">10%</h4>
                  <p>Interest rate</p>
                </div>
                <div>
                  <h4 className="font-[600] text-[#083B0B] text-[20px]">
                    NGN {p?.calcInt.toLocaleString()}
                  </h4>
                  <p>Interest on loan</p>
                </div>
                <div>
                  <h4 className="font-[600] text-[#083B0B] text-[20px]">
                    NGN {p?.repaymentAmount.toLocaleString()}
                  </h4>
                  <p>Repayment Amount</p>
                </div>
              </div>
            )}

            <div className="flex items-center justify-end">
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

export default Step1;
