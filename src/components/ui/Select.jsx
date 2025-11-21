export default function Select({ id, name, value, ...props }) {
  return <select name={name} id={id} value={value} {...props}></select>;
}
