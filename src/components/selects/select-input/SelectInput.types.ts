import { ListItem } from "../../../utils/types/index.types";
import { TextInputProps } from "../../Inputs/TextInput.types";


export type SelectInputProps = TextInputProps & {
  options?: ListItem[];
  comboBox?: boolean;
  setBilling?: any
};
