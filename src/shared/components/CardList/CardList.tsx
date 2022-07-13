import { CardListProps } from "./CardList.props";
import styles from "./CardList.module.css";
import React, { useState, useEffect, useContext } from 'react';
import { Card, P } from "../";
import { API_KEY } from '../../settings/settings.js';
import { Context } from "../../context/Context.js";
import cn from 'classnames';



export const CardList = ({ children, ...props }: CardListProps): JSX.Element => {
    const [context, setContext] = useContext(Context);
    const [data, setData] = useState(null);



    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${context}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(setData);
    }, [context]);

    if (!data) return null;
    const { name, weather, main, wind, clouds } = data; //destructing of obj
    const { description, icon } = weather[0];
    const { temp, humidity, feels_like, pressure } = main;
    const { speed } = wind;
    const { all } = clouds;

    return (
        <div
            className={styles.CardList}
            {...props}
        >
            <P size="l" className={styles.cityName}>{name}</P>
            <P size="l" className={styles.Temperature}>{temp.toFixed(0)}</P>
            <Card name="Wind Speed" info={parseFloat(speed.toFixed(2))+' km/h'}></Card>
            <Card name="Clouds" info={all + '%'}></Card>
            <Card name="Pressure" info={pressure + ' hpa'}></Card>
            <Card name="Humidity" info={humidity + '%'}></Card>
        </div>  //http://history.openweathermap.org/data/2.5/history/city?lat=41.85&lon=-87&type=hour&start=1643720400&end=1643806800&appid={API key}
    )
};

