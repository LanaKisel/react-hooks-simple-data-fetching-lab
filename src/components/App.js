import React, {useState, useEffect} from 'react'

const App = () => {

    const [image, setImage]=useState(null)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r=>r.json())
        .then(data=>setImage(data.message))
    }, [])

    if (!image) {return <p>Loading...</p>
    }

  return (
    <div>
        <img alt= "A Random Dog" src={image}/>      
    </div>
  )
}

export default App

