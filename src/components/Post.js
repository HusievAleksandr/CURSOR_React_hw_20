import React from 'react';
import styles from './style/Post.module.css';


const Post = ({author, content, image, date, statistics}) => {
    return (
        <div className= {styles['block']}>
            <div className={styles['page_title']}>
                <img  src={author.photo} alt="avatar"></img>
                <span>{author.name}</span>
                <span>{author.nickname}</span>
                <span>{date}</span>
            </div>

            <div className={styles['page_text']} >
                <span>{content}</span>
                <img src={image} alt='kontent-img'></img>
            </div>

            <div className={styles['page_sub-title']}>
                <span>
                    <img className={styles['page_sub-title-img']} src={require("./images/business.gif")} alt="bussines"></img>
                    {statistics.business}
                </span>
                <span>
                    <img className={styles['page_sub-title-img']} src={require("./images/like.png")} alt="bussines"></img>
                    {statistics.like}
                </span>
                <span>
                    <img className={styles['page_sub-title-img']} src={require("./images/desktop.png")} alt="bussines"></img>
                    {statistics.desktop}
                </span>
            </div>
        </div>
    );
};



export default Post;