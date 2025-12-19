import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import axios from 'axios';
import request from '~/utils/request';
import { useState, useEffect,useRef } from 'react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss';
import { wrapper as ProperWrapper } from '~/components/Proper';
import AccountItem from '~/components/AccountItem';
import useDebounce from '~/hooks/useDebounce';
import {
    faCircleQuestion,
    faCircleXmark,
    faCloudArrowUp,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faMessage,
    faQuestionCircle,
    faSearch,
    faSignIn,
    faSignOut,
    faSpinner,
    faUpload,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([1,23]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const HandleOnOutside = () => {
        setShowResult(false);
    }
    const debounce = useDebounce(searchValue, 500);
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        request.get(`users/search`, {
            params: {
                q: debounce,
                type: 'less',
            },
        })
           
            .then((res) => {
                setSearchResult(res.data.data);
                setLoading(false);
            })
            .catch(() => {
                setSearchResult([]);
            });
    }, [debounce]);
    return (
        <Tippy
            interactive
            placement='left-end'
            appendTo={document.body}
            visible={showResult && searchResult.length > 0}
            trigger="manual"
            onClickOutside={HandleOnOutside}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                    <ProperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                        
                    </ProperWrapper>
                </div>
            )}
           
        >
            <div className={cx('search')}>
                <input 
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos" 
                    spellCheck={false} 
                    onFocus={()=>setShowResult(true)}
                    onChange={e=>{
                    setSearchValue(e.target.value)
                }}/>
                {searchValue && (
                    <button className={cx('clear') } onClick={() => {
                        setSearchValue('');
                        setSearchResult([]);
                        inputRef.current.focus();
                        }}>
                    {!loading && <FontAwesomeIcon icon={faCircleXmark} />}
                </button>
                )}
                
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
