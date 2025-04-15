/* eslint-disable @typescript-eslint/no-unused-vars */

import { TextInputProps } from "./TextInput.types";
import { useTextInput } from "./useTextInput";

export function TextInput(props: TextInputProps) {
  const {
    validationTrigger,
    validation,
    label,
    type,
    onChange,
    name,
    iconLeft,
    iconRight,
    placeholder,
    onKeyDown,
    readOnly,
    disabled,
    ...inputProps
  } = props;

  const {
    inputType,
    handleIconClickAction,
    validationError,
    handleChange,
    parentRef,
  } = useTextInput(props);

  return (
    <div ref={parentRef} className="w-full">
      <label
        htmlFor={name}
        className="flex items-center justify-between text-sm font-semibold text text-[#083B0B] gap-2 mb-2"
      >
        {props.label}
      </label>
      <div
        className={
          "relative h-[60px] rounded-xl border bg-accent-6 bg-opacity-30 text-sm overflow-hidden border-[#D7D7D7] flex items-center"
        }
      >
        {iconLeft && (
          <button
            className={`my-auto flex px-1.5 h-full items-center justify-center text-xs text-gray-500 bg-white flex-shrink-0`}
            type={"button"}
            onClick={handleIconClickAction}
          >
            {props.iconLeft}
          </button>
        )}
        <input
          {...inputProps}
          className={`block px-5 w-full h-full disabled:cursor-not-allowed disabled:opacity-70 disabled:bg-stone-100 text-ellipsis bg-transparent placeholder:font-[500] placeholder:text-[#2E302E] opacity-50 text-[#000000] ${
            disabled ? "text-[#B5B5B5]" : ""
          } `}
          type={inputType}
          onChange={(e: any) => {
            handleChange(e);
          }}
          placeholder={props.placeholder}
          onKeyDown={onKeyDown}
          name={name}
          disabled={disabled}
        />
        {props.iconRight && (
          <button
            disabled={props.disabled}
            className={`my-auto flex px-1.5 h-full items-center justify-center text-xs text-stone-500 disabled:bg-stone-100 flex-shrink-0`}
            type={"button"}
            onClick={handleIconClickAction}
          >
            {props.iconRight}
          </button>
        )}
      </div>
      {validationError != null && (
        <p className={"leading-none mt-1 text-red-400"}>
          <span className={"text-xs leading-none font-medium"}>
            {validationError}
          </span>
        </p>
      )}
    </div>
  );
}
