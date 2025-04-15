import { Button } from "../../../components/buttons/Buttons";
import { TextInput } from "../../../components/Inputs/TextInput";
import SelectInput from "../../../components/selects/select-input/SelectInput";
import { InputChangePayload } from "../../../utils/types/index.types";

const Step4 = () => {
  return (
    <div className="flex items-center justify-center max-w-[1200px] w-full min-h-[80vh] p-4">
      <div
        className={`w-[846px] p-6 bg-white shadow-lg rounded-[20px] flex flex-col transition-transform duration-500 border border-[#D7D7D780]`}
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
            name=""
            options={[]}
          />
          <div className="flex items-center gap-4">
            <TextInput
              name={""}
              value={""}
              placeholder="Enter name"
              label={"Organisation/company name"}
              onChange={function (payload: InputChangePayload): void {
                throw new Error("Function not implemented.");
              }}
            />
            <TextInput
              name={""}
              value={""}
              placeholder="Name of business"
              label={"Enter business name"}
              onChange={function (payload: InputChangePayload): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>

          <div className="flex items-center gap-4">
            <TextInput
              name={""}
              value={""}
              placeholder="Enter Role"
              label={"Position/role"}
              onChange={function (payload: InputChangePayload): void {
                throw new Error("Function not implemented.");
              }}
            />
            <TextInput
              name={""}
              value={""}
              placeholder="Work email address"
              label={"Enter Work email address"}
              onChange={function (payload: InputChangePayload): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
