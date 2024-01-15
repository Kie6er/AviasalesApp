import { formatMinutesToHoursAndMinutes, calculateArrivalTime } from '../../utils/format';

import style from './TicketInfoItem.module.scss';

const TicketInfoItem = props => {
	const { info } = props;

	return (
		<li className={style['ticket-info-item']}>
			<div className={style['ticket-info-item__item']}>
				<span>
					{info.origin} – {info.destination}
				</span>
				<strong>{calculateArrivalTime(info.date, info.duration)}</strong>
			</div>
			<div className={style['ticket-info-item__item']}>
				<span>В пути</span>
				<strong>{formatMinutesToHoursAndMinutes(info.duration)}</strong>
			</div>
			<div className={style['ticket-info-item__item']}>
				<span>{info.stops.length === 0 ? 'нет пересадок' : info.stops.length === 1 ? `${info.stops.length} пересадка` : `${info.stops.length} пересадки`}</span>
				<strong>{info.stops.join(', ')}</strong>
			</div>
		</li>
	);
};

export default TicketInfoItem;
