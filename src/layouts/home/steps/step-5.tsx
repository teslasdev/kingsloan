import { Button } from "../../../components/buttons/Buttons";
import { TextInput } from "../../../components/Inputs/TextInput";
import SelectInput from "../../../components/selects/select-input/SelectInput";
import { InputChangePayload } from "../../../utils/types/index.types";

const Step5 = () => {
  return (
  
    <div className="flex items-center justify-center max-w-[1200px] w-full min-h-[80vh] p-4">
    <div
      className={`w-[846px] p-6 bg-white shadow-lg rounded-[20px] flex flex-col transition-transform duration-500 border border-[#D7D7D780]`}
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
        <div className="bg-[#D7D7D7] w-[145.2px] h-[8px] rounded-[100px]" />
      </div>

      <div className="flex flex-col gap-4">
        <TextInput
          name={""}
          value={""}
          label="Bank verification number (BVN)"
          placeholder={"Enter BVN"}
          onChange={function (payload: InputChangePayload): void {
            throw new Error("Function not implemented.");
          }}
        />

        <div className="flex items-center gap-4">
          <TextInput
            name={""}
            value={""}
            placeholder="Account Number"
            label={"Enter Account Number"}
            onChange={function (payload: InputChangePayload): void {
              throw new Error("Function not implemented.");
            }}
          />
          <SelectInput
            label="Bank Name"
            placeholder="Select Bank"
            name=""
            options={[]}
          />
        </div>

        <p>Account NUMBER Appear Here</p>
        <div className="flex  gap-4 items-start">
          <input
            type="checkbox"
            className="checked:border-amber-600 mt-3"
            checked={true}
            onChange={(e: any) => {}}
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
      </div>
    </div>
  </div>
  );
};

export default Step5;
