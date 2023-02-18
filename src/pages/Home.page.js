import React, { useEffect } from 'react';
import './style/Home.css';


const HomePage = props => {


    useEffect(()=>{slayder()},[]);

    function slayder(){
    let slayd = document.getElementById("slayder");
    let i = 2;
    
    setInterval(krutitSlayd,7000);
        function krutitSlayd(){
    
           slayd.setAttribute ("src", require(`./images/${i}.jpg`));       
           slayd.setAttribute("class", `show_${i}`);             
             
            if (i<4){return   i=i+1;}  
            else {return i=1;}  
            
            }
    }
    
    
    

    return (
        <main className="page">
            <section className="page_section page_section_1">             
            
                <img className="show_1"  id="slayder" src={require("./images/1.jpg")} alt=""></img>
            
            </section>
        </main>
    );
};



export default HomePage;