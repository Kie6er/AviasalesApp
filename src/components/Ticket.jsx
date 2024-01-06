import TicketInfo from './TicketInfo';

const Ticket = () => {
	return (
		<li className='ticket'>
			<div className='ticket__wrapper'>
				<div className='ticket__header'>
					<div className='ticket__price'>13 400 Р </div>
					<div className='ticket__logo'>
						<img src='./' alt='' />
					</div>
				</div>
				<TicketInfo />
			</div>
		</li>
	);
};

export default Ticket;
