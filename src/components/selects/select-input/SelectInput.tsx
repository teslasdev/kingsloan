/* eslint-disable @typescript-eslint/no-unused-vars */
import { Icon } from "@iconify/react/dist/iconify.js";
import { SelectInputProps } from "./SelectInput.types";
import useSelectInput from "./useSelectInput";
import DropDownController from "../../drop-down-controller/DropDownController";
import { TextInput } from "../../Inputs/TextInput";

export default function SelectInput(props: SelectInputProps) {
  const h = useSelectInput(props);
  const { value, ...inputProps } = props;
  return (
    <DropDownController
      options={h.options}
      top={typeof inputProps.label !== "boolean" ? 67 : 47}
      right={0}
      onSelect={(payload) => {
        inputProps.onChange({
          field: inputProps.name,
          value: payload.id,
        });
      }}
      width={"100%" as unknown as number}
    >
      <TextInput
        {...inputProps}
        value={h.selectedOption?.name || h.getInputOption(props.value?.toString())?.name as string}
        label={props.label || <>&nbsp;</>}
        iconRight={
          <Icon
            icon={props.value ? "lets-icons:close-round" : "quill:expand"}
            width={16}
            onClick={h.handleClearSelection}
            className="text-accent-2"
          />
        }
        readOnly={!props.comboBox}
        style={!props.comboBox ? { outline: "none", cursor: "pointer" } : {}}
      />
    </DropDownController>
  );
}
