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
		<nav className='bottom-b border border-neutral-300'>
			<div className='flex justify-between px-15 py-5 items-center bottom-b-1'>
				<img
					src='/assets/images/logo.svg'
					alt='brand-website-logo'
				/>
				<ul className='flex gap-10'>
					{links.map(({ id, name, to }) => (
						<li
							key={id}
							className='relative'
						>
							<NavLink
								to={to}
								className={({ isActive }) =>
									// create orange underline if nav link is active
									isActive
										? 'before:absolute before:-bottom-2 before:w-full  before:h-1 before:rounded-10 before:bg-orange-500  before:left-0  transition-transform duration-200'
										: ''
								}
							>
								{name}
							</NavLink>
						</li>
					))}
				</ul>
				<Button>Browse Recipes</Button>
			</div>
		</nav>
	);
}
