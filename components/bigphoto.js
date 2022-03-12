
import * as React from 'react';



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
    <<div>
    <div>
    </div>


    </div>



    );

};
