import { useId } from "react";
import chevronDown from "/assets/images/icon-chevron-down.svg";
export default function Select({
  id,
  placeholder,
  name,
  value,
  options,
  className,
  ...props
}) {
  const selectId = useId();

  return (
    <div className="relative max-w-full">
      <select
        className={`${className} rounded-10 bg-neutral-0 active: relative appearance-none border border-neutral-200 px-4 py-2.5 pr-9 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-200 hover:border-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 w-full`}
        name={name}
        id={id}
        value={value}
        {...props}
      >
        <option value="" key={""}>
          {placeholder ? placeholder : "Please choose an option"}
        </option>
        {options.map((option, idx) => (
          <option key={`${selectId}-value-${idx}`} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <img
        src={chevronDown}
        className="absolute top-2 right-4 aspect-square w-4 shrink-0 translate-x-1/2 translate-y-1/2"
      />
    </div>
  );
}
