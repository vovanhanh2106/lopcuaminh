import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountsItem({data,key}) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                
                <p className={cx('name')}>
                    <span>{data.full_name}</span>

                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}/>}
                    
                </p>
                <p className={cx('username')}>{data.full_name}</p>
            </div>
        </Link>
    );
}

export default AccountsItem;