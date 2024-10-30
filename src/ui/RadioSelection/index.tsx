import Label from "../Label";
import {
  StyledRadio,
  RadioWrapper,
  RadioSelectionWrapper,
  StyledLabel,
} from "./RadioSelection.styled";

type RadioOption = {
  value: string;
  text: string;
};

type RadioSelectionProps = {
  label: string;
  groupId: string;
  optionList: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
};

const RadioSelection = ({ label, groupId, optionList, value, onChange }: RadioSelectionProps) => {
  return (
    <RadioSelectionWrapper>
      <StyledLabel>{label}</StyledLabel>
      {optionList.map((item) => (
        <RadioWrapper key={item.value}>
          <StyledRadio
            type="radio"
            name={groupId}
            value={item.value}
            id={item.value}
            checked={value? item.value === value : undefined}
            onClick={() => onChange? onChange(item.value) : null}
          />
          <Label htmlFor={item.value}>{item.text}</Label>
        </RadioWrapper>
      ))}
    </RadioSelectionWrapper>
  );
};

export default RadioSelection;
