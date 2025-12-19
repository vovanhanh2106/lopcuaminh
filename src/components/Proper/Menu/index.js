import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import classNames from 'classnames/bind';
import {wrapper as ProperWrapper}  from'~/components/Proper';
import Headers from './Header';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);
const defaultChange =()=>{

}
function Menu({children,items=[],onChange=defaultChange}) {
    const [history, setHistory] = useState([{data: items}]);
    const current = history[history.length - 1];
    const RenderItems = () => {
        return current.data.map((item,index) => {
            // const isParent = !!item.children
            return <MenuItem key={index} data={item} onClick={()=>{
                if(item.children){
                    setHistory(prev => [...prev,item.children])
                }else{
                    onChange(item);
                }
            }}/>
        })
    }
    return ( 
          <Tippy
                        interactive
                        placement="bottom-end"
                      trigger='click'
                       hideOnClick={true}
                        render={attrs => (
                            <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                            <ProperWrapper>
                                {history.length>1 && <Headers title="Language" onBack={()=>{setHistory((prev)=>{
                                   return prev.slice(0,prev.length-1);
                                })}}/>}
                               {RenderItems()}
                                
                            </ProperWrapper>
                            </div>
                        )}
                        onHide={() => setHistory(prev => prev.slice(0,1))}
                    
                    >               
                          {children}
                    </Tippy>
     );
}

export default Menu;