import React from 'react';
import styles from './style/Contracts.module.css';
import male from './images/male.png';
import female from './images/female.png';
import hermaphrodite from './images/hermaphrodite.png';


const Contracts = (props) => {
    return (
        <div className={styles['block']}>
            <div className={styles['people']}>
            <span>Ім'я: {props.firstName}</span>
            <span>Прізвище: {props.lastName}</span>
            <span>Номер тел.:{props.phone}</span>
            <span>Стать: {props.gender}<img src={
                props.gender==undefined?hermaphrodite:
                props.gender=='male'?male:female}
                ></img>
            </span>
            </div>
        </div>
    );
};



export default Contracts;
