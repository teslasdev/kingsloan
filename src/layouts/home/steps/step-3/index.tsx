import { Button } from "../../../../components/buttons/Buttons";
import { TextInput } from "../../../../components/Inputs/TextInput";
import SelectInput from "../../../../components/selects/select-input/SelectInput";

const Step3 = () => {
  return (
    <div className="flex items-center justify-center max-w-[1200px] w-full min-h-[80vh] p-4">
      <div
        className={`w-[846px] p-6 bg-white shadow-lg rounded-[20px] flex flex-col transition-transform duration-500 border border-[#D7D7D780]`}
      >
        <h1 className="text-[24px] text-[#083B0B] font-[600]">
          How can we contact you?
        </h1>
        <p className="text-[14px] font-[400] text-[#2E302E]">
          Let us know how we can reach to you and your referees
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
              placeholder="Enter address"
              label={"Email address"}
              onChange={() => {}}
            />
            <TextInput
              name={""}
              value={""}
              placeholder="Enter Phone number"
              label={"Phone number"}
              onChange={() => {}}
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[114px]">
              <SelectInput
                label="Date of Birth"
                placeholder="Day"
                name=""
                options={[]}
                value={""}
                onChange={() => {}}
              />
            </div>

            <SelectInput
              label="Full residential address"
              placeholder="Enter full Address"
              name=""
              options={[]}
              value={""}
              onChange={() => {}}
            />
          </div>

          <div className="flex gap-4 flex-col w-full">
            <h1 className="text-[20px] mb-2 text-[#083B0B] font-[600]">
              Referee 1
            </h1>
            <div className="flex items-center gap-4 w-full">
              <SelectInput
                label="First Name"
                placeholder="Enter First Name"
                name=""
                options={[]}
                value={""}
                onChange={() => {}}
              />
              <SelectInput
                label="Last Name"
                placeholder="Enter Last Name"
                name=""
                options={[]}
                value={""}
                onChange={() => {}}
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <SelectInput
                label="Relationship"
                placeholder="Select Relationship"
                name=""
                value={""}
                onChange={() => {}}
                options={[]}
              />
              <SelectInput
                label="Phone number"
                placeholder="Enter Phone number"
                name=""
                value={""}
                onChange={() => {}}
                options={[]}
              />
            </div>
          </div>

          <div className="flex gap-4 flex-col w-full">
            <h1 className="text-[20px] mb-2 text-[#083B0B] font-[600]">
              Referee 2
            </h1>
            <div className="flex items-center gap-4 w-full">
              <SelectInput
                label="First Name"
                placeholder="Enter First Name"
                name=""
                value={""}
                onChange={() => {}}
                options={[]}
              />
              <SelectInput
                label="Last Name"
                placeholder="Enter Last Name"
                name=""
                value={""}
                onChange={() => {}}
                options={[]}
              />
            </div>

            <div className="flex items-center gap-4 w-full">
              <SelectInput
                label="Relationship"
                placeholder="Select Relationship"
                name=""
                value={""}
                onChange={() => {}}
                options={[]}
              />
              <SelectInput
                label="Phone number"
                placeholder="Enter Phone number"
                name=""
                value={""}
                onChange={() => {}}
                options={[]}
              />
            </div>
          </div>
          <div className="flex items-center justify-end">
            <Button className={"w-[200px] h-[52px]"}>Proceed</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
