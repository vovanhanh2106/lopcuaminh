import styles  from './Button.module.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
const cx = classNames.bind(styles); 
function Button({children,primary,outline,small,to,href,rightIcon,className,leftIcon,round,large,text,disable,onClick,...passProps}) {
    let Comp='button';
    const classes = cx('wrapper',{primary,outline,[className]:className,small,large,text,disable,round,leftIcon});
    const props={onClick,
       
        ...passProps,
    };
    if(disable){
       Object.keys(props).forEach(key=>{
        if(key.startsWith('on') && typeof props[key] ==='function'){
            delete props[key];
        }
        });
    }
    if(to){
        props.to=to;
        Comp=Link;
    } else if(href){
        props.href=href;
        Comp='a';
    }
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span>{children}</span>
            
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
             
        </Comp>
);
}   
export default Button;