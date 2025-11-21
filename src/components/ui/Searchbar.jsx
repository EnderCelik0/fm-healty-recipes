export default function Searchbar() {
	return (
		<form>
			<label
				htmlFor='search'
				className='sr-only'
			>
				Search
			</label>
			<div className='relative'>
				<input
					type='text'
					className='px-10 py-2.5 border border-neutral-300 focus:ring-2 focus:ring-neutral-900 ring-offset-2 transition-all duration-200 min-w-96 rounded-10 active:border-neutral-900 placeholder:text-preset-7 placeholder:opacity-70 '
					placeholder='Search by name or ingredient...'
					name='search'
				/>
				<img
					src='/assets/images/icon-search.svg'
					alt='searchbar-icon'
					className='absolute left-3 top-3 text-neutral-900 '
				/>
			</div>
		</form>
	);
}
