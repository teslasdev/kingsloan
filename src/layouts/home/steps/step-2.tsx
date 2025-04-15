import { Button } from "../../../components/buttons/Buttons";
import { TextInput } from "../../../components/Inputs/TextInput";
import SelectInput from "../../../components/selects/select-input/SelectInput";
import { InputChangePayload } from "../../../utils/types/index.types";

const Step2 = () => {
  return (
      <div className="flex items-center justify-center max-w-[1200px] w-full min-h-[80vh] p-4">
            <div
              className={`w-[846px] p-6 bg-white shadow-lg rounded-[20px] flex flex-col transition-transform duration-500 border border-[#D7D7D780]`}
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
                <div className="bg-[#D7D7D7] w-[145.2px] h-[8px] rounded-[100px]" />
                <div className="bg-[#D7D7D7] w-[145.2px] h-[8px] rounded-[100px]" />
                <div className="bg-[#D7D7D7] w-[145.2px] h-[8px] rounded-[100px]" />
                <div className="bg-[#D7D7D7] w-[145.2px] h-[8px] rounded-[100px]" />
              </div>
    
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <TextInput
                    name={""}
                    value={""}
                    placeholder="Enter First Name"
                    label={"First Name"}
                    onChange={function (payload: InputChangePayload): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                  <TextInput
                    name={""}
                    value={""}
                    placeholder="Enter Last Name"
                    label={"Last Name"}
                    onChange={function (payload: InputChangePayload): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                </div>
                <div className="flex items-center gap-4">
                  <SelectInput
                    label="Date of Birth"
                    placeholder="Day"
                    name=""
                    options={[]}
                  />
                  <SelectInput label="" placeholder="Month" name="" options={[]} />
                  <SelectInput label="" placeholder="Year" name="" options={[]} />
                </div>
    
                <div className="flex items-center gap-4">
                  <SelectInput
                    label="Gender"
                    placeholder="Select Gender"
                    name=""
                    options={[]}
                  />
                  <SelectInput
                    label="Marital Status"
                    placeholder="Select Status"
                    name=""
                    options={[]}
                  />
                </div>
    
                <div className="flex items-center gap-4">
                  <SelectInput
                    label="Means of Identification"
                    placeholder="Select means of identification"
                    name=""
                    options={[]}
                  />
                  <SelectInput
                    label="Document Id"
                    placeholder="Enter Id number"
                    name=""
                    options={[]}
                  />
                </div>
                <div className="flex items-center justify-end">
                  <Button className={"w-[200px] h-[52px]"}>Proceed</Button>
                </div>
              </div>
            </div>
          </div>
  );
};

export default Step2;
