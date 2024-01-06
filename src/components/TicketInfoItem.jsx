const TicketInfoItem = () => {
	return (
		<li className='ticket-info-item'>
			<div className='ticket-info-item__item'>
				<span>MOW – HKT</span>
				<strong>10:45 – 08:00</strong>
			</div>
			<div className='ticket-info-item__item'>
				<span>В пути</span>
				<strong>21ч 15м</strong>
			</div>
			<div className='ticket-info-item__item'>
				<span>2 пересадки</span>
				<strong>HKG, JNB</strong>
			</div>
		</li>
	);
};

export default TicketInfoItem;
