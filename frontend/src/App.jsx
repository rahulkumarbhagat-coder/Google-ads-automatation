import { useState } from 'react'
import { extractBusinessInfo } from './functions/extractInfo'

function App() {
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([])
  const handleClick = async() =>{
    if (!message.trim()){
      alert('You can start with a "Hi"')
      return;
    } 

    //storing user's message
    const newMessage = [...chat, {role:'You', content: message}]
    setChat(newMessage)
    setMessage('')

    //sending request to server
    const response = await fetch('http://localhost:4000',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({message})
    })
    
    const data = await response.json()
    console.log(data);
    const businessInfo = extractBusinessInfo(data.response.message)
    console.log(businessInfo);
    //storing bot's message
    setChat([...newMessage, {role: 'Assistant', content: data.response.message}]);
    
  }

  return (
    <div className='w-full h-[100vh] bg-gray-700 p-5'>
      <div className="h-[95vh] w-[60vw] rounded-4xl border-2 border-black bg-gray-600 m-auto flex flex-col items-center shadow-2xl justify-between">
        <h1 className='text-white font-bold mt-5 text-4xl'>Google Ads Support</h1>
        <div className="bg-gray-800 w-[55vw] h-[83vh] rounded-3xl mb-2 flex flex-col">
          <div className="w-full h-[90%] overflow-y-scroll flex flex-col">
            {chat?.map((item, index)=>(
              <div key={index} className= {`bg-gray-500 text-black w-[80%] m-2 rounded-3xl bg-gray-${item.role=='You'?'600 self-end':'400 self-start'}`}>
                <strong className='mx-2'>{item.role}:</strong>
                <p className='p-2'>{item.content}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <input type="text" className='w-full ml-2 px-3  h-8 text-white  bg-gray-600 rounded-3xl border-1 border-black' value={message} onChange={(e)=>setMessage(e.target.value)}/>
          <button className='w-[20%] h-8 mx-2 border-black border-1 rounded-3xl cursor-pointer' onClick={handleClick}>Send</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default App
