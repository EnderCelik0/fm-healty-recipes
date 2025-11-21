export default function Button({ children }) {
	return (
		<button className='text-preset-7 px-8 py-4 bg-neutral-900 rounded-10 cursor-pointer text-neutral-0 hover:bg-neutral-800  focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 transition-all'>
			{children}
		</button>
	);
}
