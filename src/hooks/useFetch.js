import { useState, useEffect } from "react"

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading , setloading] = useState(false)
  const [error , setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setloading(true)
       try {
        const req = await fetch(url)
        if(!req.ok) {
          throw new Error(req.statusText)
        }
        const data = await req.json()
        setData(data)
        setloading(false) 
       } catch(err) {
          console.log(err.message);
          setError(err.message)
          setloading(false) 
       } 
    }
    fetchData()
  }, [url])

  return { data , loading , error}
}

export { useFetch }