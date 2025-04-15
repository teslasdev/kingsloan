import useClickOut from "@bscop/use-click-out";
import { useState } from "react";

import { DropDownControllerProps } from "./DropDownController.types";
import { ListItem } from "../../utils/types/index.types";

export default function useDropDownController(props: DropDownControllerProps) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  function toggleOptionsOpen() {
    setIsOptionsOpen((open) => {
      return !open;
    });
  }

  function handleOptionClick(option: ListItem) {
    toggleOptionsOpen();
    props.onSelect?.(option);
  }

  function handleClickOutside() {
    setIsOptionsOpen(isOptionsOpen ? false : isOptionsOpen);
  }

  const dropDownRef = useClickOut(handleClickOutside);

  return { isOptionsOpen, toggleOptionsOpen, dropDownRef, handleOptionClick };
}
