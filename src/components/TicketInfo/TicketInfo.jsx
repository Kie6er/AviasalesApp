import TicketInfoItem from '../TicketInfoItem/TicketInfoItem';

import style from './TicketInfo.module.scss';

const TicketInfo = props => {
	return (
		<ul className={style['ticket-info']}>
			<TicketInfoItem info={props.segments[0]} {...props} />
			<TicketInfoItem info={props.segments[1]} {...props} />
		</ul>
	);
};

export default TicketInfo;
