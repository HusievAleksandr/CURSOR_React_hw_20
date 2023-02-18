import React from 'react';
import Post from '../components/Post';

const publications =[{
  author: {
    name: "Anakin skywalker",
    photo: "https://m.media-amazon.com/images/I/51SgxtdaowL._AC_SL1000_.jpg",
    nickname: "@dart_vader"},

  content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",
  image:"https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/03/star-wars-order.png",
  date:"26 февр.",
  statistics: {
    business: "105",
    like: "245",
    desktop: "45"}
  },

  {
    author: {
      name: "Battlefront",
      photo: "https://lumiere-a.akamaihd.net/v1/images/clone-wars-chronological-order-ahsoka_tall_6768d628.jpeg",
      nickname: "@edition"},
  
    content:"STAR WARS™ Battlefront™ II: Celebration Edition",
    image:"https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg",
    date:"14 февр.",
    statistics: {
      business: "152",
      like: "25",
      desktop: "55"}
    },

    {
      author: {
        name: "Galaxy of Heroes",
        photo: "https://nationaltoday.com/wp-content/uploads/2020/05/star-wars-day.jpg",
        nickname: "@star_wars"},
    
      content:"Star Wars™ Galaxy of Heroes - Free Mobile Game - EA Official Site",
      image:"https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2016/11/news-article-images-star-wars-goh-splash.jpg.adapt.crop16x9.1023w.jpg",
      date:"06 февр.",
      statistics: {
        business: "95",
        like: "45",
        desktop: "145"}
      },
];

const SideOfPublicationsPage = props => {
    return (
        publications.map((el)=>
        <Post author={el.author}
            content={el.content}
            image={el.image}
            date={el.date}
            statistics={el.statistics} 
        />)
            
    );
};



export default SideOfPublicationsPage;