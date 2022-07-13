import { CardProps } from "./Card.props";
import styles from "./Card.module.css";
import cn from 'classnames';
import { P } from '../../components';


export const Card = ({name, info, ...props }: CardProps): JSX.Element => {

    return (
        <div
            className={styles.Card}
            {...props}
        >
            <P>{name}</P>
            <P size="xl" color="white">{info}</P>
        </div>
    )
};