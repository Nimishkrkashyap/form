import React,{ useState } from 'react'

const  App=()=> {
  const [data, setData] = useState({
    fullname:"",
    email:"",
    phone:"",
    textarea:""
  });


  const InputEvent = (event)=>{
    const value = (event.target.value);
    const name = (event.target.name); 

  setData((previousVal) => {
    return {
      ...previousVal,
      [name]: value,
    }
  })

  }


  const onSubmit=(Event)=>{
    Event.preventDefault();
      setData(data)
      // const datas = JSON.parse(data)
      console.log(data)
      alert(JSON.stringify(data))
      // alert(`${data.value}` )
  }

 
  return (
    <div className='for-vl-type'>
    <form onSubmit={onSubmit}>
      <div className='form-data'>
     <div className='message'>
      <label for="fname">First name:</label>
      <input type="text"
      name = 'fullname'
       onChange={InputEvent} 
      value={data.name}/>  
      </div>

      <div className='email'>
      <label for="fname">Enter email:</label>
      <input type="email" 
      name='email'
      onChange={InputEvent}
       value={data.email} />
      </div>

      <div className='phone'>
      <label for="fname">Phone number:</label>
     <input type="number"
      name="phone" 
      onChange={InputEvent}
      value={data.phone} />
      </div>

      <div className='textarea'>
      <label for="fname">Message :</label>
      <textarea  placeholder='type message'
      name='textarea'
      onChange={InputEvent}
      value={data.textarea}
      ></textarea>
      </div>   
     
    <button type='text' >Click Me 👍</button> 
      </div>
      </form>
    </div>
  )
}

export default App;
