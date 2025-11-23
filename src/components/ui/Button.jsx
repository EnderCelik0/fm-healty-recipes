export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`text-preset-7 rounded-10 text-neutral-0 cursor-pointer bg-neutral-900 px-8 py-4 transition-all hover:bg-neutral-600 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
