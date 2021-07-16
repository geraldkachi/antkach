import {useState, useEffect} from 'react'
import axios from "axios"

const useFetchData = ({url}) => {
    const [loading, setloading] = useState(false)
    const [output, setoutput] = useState('{}')
    const [persons, setPersons] = useState([]);


    const fetchData = async () => {
        const res = await fetch(url)
         res.json()
        .then(res => setTimeout(() => {setoutput(res); setloading(false)},1500))
        .catch(res => {setoutput('{}'); setloading(false);})
    }

    // `https://jsonplaceholder.typicode.com/posts`
    const fetchPost = async () => {
        await axios(url)
        //   .then((res) => setPersons(res.data))
          .then(res => setTimeout(() => {setPersons(res.data); setloading(false)},1500))
          .catch((err) => console.error(err));
      };

    useEffect(() => {
            fetchData()
            fetchPost()
    }, [url]);

    return [loading, output, persons]
}

export default useFetchData
