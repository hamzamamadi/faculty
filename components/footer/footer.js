// @flow
import * as React from 'react';
import "./footer.css"

 
export default function Footer(){
  const [inputs, setInputs] = React.useState({});
 const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }
  
    return (
      <div className='container-footer'>
          <div className='contact-us-footer'>
 
            <form onSubmit={handleSubmit}>
      <label>Enter your Email:
      <input className="input"  
        type="text" 
        name="Email" 
        
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input className="input"
          type="text" 
          name="Username" 
          
          placeholder={"hello"}
          onChange={handleChange}
        />


       
        </label>
        
        
        
        <label className="input" >Enter your text:
       <textarea> </textarea>

       
        </label>
         
        <input type="submit" />
    </form>
              
               </div>
          <div className='extra-links-footer'>
            <a className="news" href="#"> thsi is new news</a>
            <a className="news" href="#"> thsi is new news</a>

            <a className="news" href="#"> thsi is new news</a>
            <a className="news" href="#"> thsi is new news</a>
            <a className="news" href="#"> thsi is new news</a>
            <a className="news" href="#"> thsi is new news</a>
            <a className="news" href="#"> thsi is new news</a>
            <a className="news" href="#"> thsi is new news</a>
            <a className="news" href="#"> thsi is new news</a>
            <a className="news" href="#"> thsi is new news</a>

            <a className="news" href="#"> thsi is new news</a>
            <a className="news" href="#"> thsi is new news</a>
            <a className="news" href="#"> thsi is new news</a>
            <a className="news" href="#"> thsi is new news</a>
            <a className="news" href="#"> thsi is new news</a>
            <a className="news" href="#"> thsi is new news</a>
            <a className="news" href="#"> thsi is new news</a>
            <a className="news" href="#"> thsi is new news</a>

            <a className="news" href="#"> thsi is new news</a>
            <a className="news" href="#"> thsi is new news</a>
            <a className="news" href="#"> thsi is new news</a>
            <a className="news" href="#"> thsi is new news</a>
            <a className="news" href="#"> thsi is new news</a>
            <a className="news" href="#"> thsi is new news</a>

            
            
            
             </div>
        
      </div>
    );
  
};
