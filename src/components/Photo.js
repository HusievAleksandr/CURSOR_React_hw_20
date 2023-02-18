import React from 'react';
import styles from './style/Photo.module.css';


const Photo = (props) => { 

    

    return (
        
        <div className={styles['planets']}>
            <span>{props.name}</span>
            <img src={props.images} alt={props.name}></img>
            
        </div>
       
        
    );
};



export default Photo;