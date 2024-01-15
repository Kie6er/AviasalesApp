import { useSelector } from 'react-redux';

const NavigationButton = ({ title, sort, onClick }) => {
	const sortBy = useSelector(state => state.sort.sortBy);

	let classes = 'navigation__btn';
	if (sort === sortBy) classes += ' active';

	return (
		<button className={classes} type='button' onClick={onClick}>
			{title}
		</button>
	);
};

export default NavigationButton;
