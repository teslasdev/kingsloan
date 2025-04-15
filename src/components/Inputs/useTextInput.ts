import { InputProps } from "./__base__/Inputs.types";
import { useInput } from "./__base__/UseInput";

export function useTextInput(props: InputProps) {
  const inputInstance = useInput(props);

  function handleIconClickAction() {
    if (props.type === "password") {
      inputInstance.handleChangeInputType(
        inputInstance.inputType === "password" ? "text" : "password"
      );
    }

    if (props.onIconLeftClick) {
      props.onIconLeftClick();
    }
  }

  return {
    handleIconClickAction,
    ...inputInstance,
  };
}
