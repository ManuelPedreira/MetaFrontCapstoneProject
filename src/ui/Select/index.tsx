import { FieldValues, UseFormRegister } from "react-hook-form";
import { SelectWrapper, StyledLabel, StyledSelect } from "./Select.styled";

type OptionType = {
  value: string;
  text: string;
};

type SelectProps = {
  label: string;
  optionList: OptionType[];
  value?: string;
  isError?: boolean;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  arialLabel?: string;
  className?: string;
  style?: React.CSSProperties;
  register?: ReturnType<UseFormRegister<FieldValues>>;
};

const Select = ({
  label,
  optionList,
  value,
  isError = false,
  onChange,
  arialLabel,
  style,
  className,
  register,
}: SelectProps) => {
  return (
    <SelectWrapper className={className} style={style}>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect aria-label={arialLabel} value={value} onChange={onChange} {...register} $isError={isError}>
        {optionList.map((item, index) => (
          <option key={`${index}${item.value}`} value={item.value}>
            {item.text}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};

export default Select;
