import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [ data, setData ] = useState([])

    useEffect(() => {
      const fetchResource = async () => {
          try {
              let res = await fetch(url)
              let response = await res.json()
              setData(response)
              
          } catch (error) {
              console.log(error);
          }
      }
      fetchResource()
    }, [url])

    return { data }
}


export default useFetch