import { NavLink } from 'react-router';
import Button from '../ui/Button';

export default function Navbar() {
	const links = [
		{
			id: 1,
			name: 'Home',
			to: '/',
		},
		{
			id: 2,
			name: 'About',
			to: '/about',
		},
		{
			id: 3,
			name: 'Recipes',
			to: '/recipes',
		},
	];

	return (
		<nav className='flex justify-between px-15 py-5 items-center'>
			<div>
				{' '}
				<img
					src='/images/logo.svg'
					alt='brand-website-logo'
				/>
			</div>
			<ul className='flex gap-10'>
				{links.map(({ id, name, to }) => (
					<li
						key={id}
						className='relative'
					>
						<NavLink
							to={to}
							className={({ isActive }) =>
								isActive
									? 'before:absolute before:-bottom-2 before:w-full  before:h-1 before:rounded-10 before:bg-orange-500  before:left-0 before:scale-x-100 transition-transform duration-200'
									: 'scale-x-0'
							}
						>
							{name}
						</NavLink>
					</li>
				))}
			</ul>
			<Button>Browse Recipes</Button>
		</nav>
	);
}
