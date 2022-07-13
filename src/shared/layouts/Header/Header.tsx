import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from 'classnames';
import { format } from 'date-fns';
import { P, Search } from '../../components';


export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    return (
        <header className={cn(className, styles.header)} {...props}>
            <div className={cn(className, styles.search)}>
                <P size="l" className={cn(className, styles.white_date)}>{format(new Date(), 'MMMM, yyyy')}</P>
                <P color="white" size="s">{format(new Date(), 'EEEE, PP')}</P>
            </div>
            <Search className={cn(className, styles.search)}></Search>
            <br />
        </header>
    )
};