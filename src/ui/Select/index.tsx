import { StyledLabel, StyledSelect } from "./Select.styled";

type OptionType = {
  value: string;
  text: string;
};

type SelectProps = {
  label: string;
  optionList: OptionType[];
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  arialLabel?: string;
};

const Select = ({ label, optionList, value, onChange, arialLabel }: SelectProps) => {
  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect aria-label={arialLabel} value={value} onChange={onChange}>
        {optionList.map((item, index) => (
          <option key={`${index}${item.value}`} value={item.value}>
            {item.text}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
};

export default Select;
