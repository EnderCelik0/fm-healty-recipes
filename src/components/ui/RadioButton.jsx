export default function RadioButton({ label, id, name, value, ...props }) {
  return (
    <div className="group inline-flex items-center">
      <label className="relative flex cursor-pointer items-center" htmlFor={id}>
        <input
          type="radio"
          value={value}
          name={name}
          id={id}
          {...props}
          className="peer aspect-square w-4 cursor-pointer appearance-none rounded-full border border-neutral-300 border-neutral-400 transition-all duration-200 outline-none checked:border-2 checked:border-neutral-900 hover:not-checked:border-neutral-100 hover:checked:border-neutral-600 focus:ring-3 focus:ring-neutral-300"
        />
        <span className="absolute top-1/2 left-1/2 aspect-square w-2 -translate-x-1/2 -translate-y-1/2 scale-0 transform rounded-full bg-neutral-900 opacity-0 transition-all duration-200 group-hover:bg-neutral-600 peer-checked:scale-100 peer-checked:opacity-100"></span>
        {label}
      </label>
    </div>
  );
}
