export default function HighlightedText({ text, bg, preset }) {
  const background = `before:${bg}`;
  const textPreset = `te`;

  return (
    <span className="text-preset-5 relative z-10">
      {text}
      <span
        className={`before:rounded-10 transition-transform duration-200 before:absolute before:bottom-1 before:left-0 before:-z-1 before:h-3 before:w-full ${background}`}
      ></span>
    </span>
  );
}
