import classNames from 'classnames/bind';
import { useState ,useEffect} from 'react';
import logo from '~/assests/images/logo.svg';
import Tippy from '@tippyjs/react/headless';
import Tippy2 from '@tippyjs/react';
import Image from '~/components/Img';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import Menu from '~/components/Proper/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import { faCircleQuestion, faCircleXmark, faCloudArrowUp, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faMagnifyingGlass, faMessage, faQuestionCircle, faSearch, faSignIn, faSignOut, faSpinner, faUpload, faUser } from '@fortawesome/free-solid-svg-icons';
import {wrapper as ProperWrapper}  from'~/components/Proper';
import AccountItem from '~/components/AccountItem';
import Search from '../Search';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
// import { hover } from '@testing-library/user-event/dist/hover';
const cx = classNames.bind(styles);
function Header() {
 
   const ITEM=[
        {icon: <FontAwesomeIcon icon={faEarthAsia}/>, title: 'English',children: {
            title: 'Language',
            data: [{
                code: 'en', title: 'English',type: 'language'
            },
            {
                code: 'vi', title: 'Tiếng Việt',type: 'language'
            }]}},
        {icon: <FontAwesomeIcon icon={faQuestionCircle}/>, title: 'Feedback and help',to: '/feedback',},
        {icon: <FontAwesomeIcon icon={faKeyboard}/>, title: 'Keyboard shortcuts',},
   ]
    useEffect(() => {
        // Fake API call
      
    }, []);
    const currentUser = true;
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                console.log('Change language to', menuItem.code);
                break;
            default:
                break;
        }
    }
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}/>,
            title: 'View profile',
            to: '/hoaa'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}/>,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear}/>,
            title: 'settings',
            to: '/settings'
        },
        ...ITEM,
        {
            icon: <FontAwesomeIcon icon={faSignOut}/>,
            title: 'Log out',
            to: '/logout',
            separate: true
        }
    ]
    return ( <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
               
                <img src={logo} alt="TikTok" />
            </div>
            <Search />
            {currentUser ? ( 
            <div className={cx('actions')}>
                <Tippy2 delay={[0,100]} content="Up load video" placement="bottom">
                    <div className={cx('actions-btn')}>
                  
                    <button><UploadIcon className={classNames} /></button>
                  
                </div>
                
                </Tippy2>
                <Tippy2 delay={[0,100]} content="Message" placement="bottom">
                    <div className={cx('actions-btn')}>
                    <button><MessageIcon className={classNames} /></button>
                    
                </div>
                
                </Tippy2>
                <Tippy2 delay={[0,100]} content="Inbox" placement="bottom">
                    <div className={cx('actions-btn')}>
                  
                    <button><InboxIcon className={classNames}  /></button>
                </div>
                
                </Tippy2>
                <Menu items={userMenu} onChange={handleMenuChange}>
                    <Image
                        className={cx('user-avatar')} 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmGMrUA22xz9dv1pz-vZgh7TIyNRRt84wNA&s"
                        alt="Nguyen Van A"
                        
                    >

                    </Image>
                    
                        
                    
                
                    
                </Menu>
               
                
            </div>)
            : (<div className={cx('actions')}>
                <Button primary>Login</Button>
                <Button rightIcon={ <UploadIcon className={classNames} />}>Up load</Button>
                
                <Menu 
                  items={ITEM} onChange={handleMenuChange}
                >
                    
                        
                        
                        
                    
                        
                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </Menu>
               
                   
            </div>)}
            
            
            
        </div>
    </header> );
}

export default Header;