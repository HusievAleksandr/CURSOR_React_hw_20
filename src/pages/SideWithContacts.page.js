import React, { useRef, useState }from 'react';
import Contracts from '../components/Contracts';
import styles from './style/SideWithContacts.module.css';



const SideWithContactsPage = props => {
    const contacts = [{
        firstName: "Барней",
        lastName: "Стинсовський",
        phone: "+380956319521",
        gender: "male"
        }, {
        firstName: "Робін",
        lastName: "Щербатська",
        phone: "+380931460123",
        gender: "female"
        }, {
        firstName: "Анонімний",
        lastName: "Анонімус",
        phone: "+380666666666"
        }, {
        firstName: "Лілія",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female"
        }, {
        firstName: "Маршен",
        lastName: "Еріксонян",
        phone: "+380739432123",
        gender: "male"
        }, {
        firstName: "Теодор",
        lastName: "Мотсбес",
        phone: "+380956319521",
        gender: "male"
        }];
    
    const [count, setCount]= useState(contacts);
    const filterContakt =(value) => { 
      if(typeof value=="string"){
                setCount((props)=>{ 
                  
                return props.filter((elProps)=> 
                Object.values(elProps).filter((elObj)=>
                elObj.toLowerCase().includes(value.toLowerCase())).length > 0)
                                  })
                                  }
      else {
                setCount((props)=>{
    
                 return props.filter((elProps)=>
                 value.filter((elValue)=> 
                 (elValue == ""?undefined:elValue) == elProps.gender).length > 0
                                    );
    
                                    });
            }
                                      };
    
    
    const inputFilter = useRef();
    const onClick = ()=>  {setCount(contacts); 
                          return filterContakt(inputFilter.current.value);}
    
    const inputCheckboxMale = useRef();
    const inputCheckboxFemale = useRef();
    const inputCheckboxNone = useRef();
    const onChange = ()=> { let result=[];
                            if(inputCheckboxMale.current.checked){result.push(inputCheckboxMale.current.value)};
                            if(inputCheckboxFemale.current.checked){result.push(inputCheckboxFemale.current.value)};
                            if(inputCheckboxNone.current.checked){result.push(inputCheckboxNone.current.value)};
                            setCount(contacts);
                            return  filterContakt(result);
    };
    
    
    
      return ( 
       <div>
          <div className={styles['header']}>
              <div className={styles['header_main']}>
                <label for="filter">Search text</label>
                <input id="filter" type="text" ref={inputFilter}  ></input>
                <button onClick={onClick}>Search</button>          
              </div> 
    
                <div className={styles['header_main']}>
                  <h3>Check gender</h3>
    
                  <label for="male">male</label>            
                  <input onChange={onChange} ref ={inputCheckboxMale} type="checkbox"  defaultChecked={true} name="Check gender" value="male"></input>
    
                  <label  for="female">female</label>            
                  <input onChange={onChange} ref ={inputCheckboxFemale} type="checkbox"  defaultChecked={true} name="Check gender" value="female"></input>
    
                  <label for="undefined">undefined</label>            
                  <input onChange={onChange} ref ={inputCheckboxNone} type="checkbox" defaultChecked={true}  name="Check gender"  value={undefined}></input>
                </div>
    
          </div>
        
        
        
        {count.map((el,i)=>
          <Contracts {...el} key={i}/>)}
        </div>
      );
};



export default SideWithContactsPage;