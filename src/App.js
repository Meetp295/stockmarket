import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

const [data,setData]=useState('')

var myHeaders = new Headers();
myHeaders.append("Cookie", "ak_bmsc=DB327A3C1608B822B6AA9D681DDA8CF8~000000000000000000000000000000~YAAQcDLUF3FaAJCIAQAAMGpNoRR4EEPjJ2ufezLaYgdzdYvahR/oLxe7tyEuXAPfXpkqKubCwWJZgoLFUuGE3e6uDuAxMzYpNF95HIiCQkbFezno/V22g2ecs4PtL3Wzxj/Ny88puoKXXQ+crjJ63xyxL5nQV4tY3qDKNFoey5OR8cv+N6GjPOxSM18kfUz6L+p9AlPYP6YfZQE+sEYCjT6qU7T/wztMqmgCJeGchj3Reo+6y0mpAAOHlHqEZitj4d0lNYqZclrzDjcd4RUNqRcqzABTg8U+g/dfv7kivTAZD6fgW2q5RzQZv39CH2T9vA44yHGopzx56W3d/dCR+8e0RSSUhG4TOtAX+ZptBn7nSrDP9o7wJwBhDZAK; bm_sv=349E306634FF2C5FFE5D56F718EDF3D4~YAAQcDLUF0JcAJCIAQAAU6lNoRSGWcKUP5K8WlHy+fVfXjUyOccc2yiMeJ1XmjD42N83BKRRkcwiwbFEgmPsOBd0K8TML/cD76mo0ruPBIdRawvZaGOOK9t8Iv4e+cHTomS50v+qGwK2ykV0EuqolHYc31D19rgtlXG902Pou2DgeVWmV9dtAoyIE6REog0AmAffjstaChIGFKYOcAS9bZ7+gicm04/QnkgTMBBmHS7ql1u4UXT+2fkmw4b3mzHCm1o=~1");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};


  useEffect(()=>{


    setInterval(()=>{
      // axios.get('https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY').then((res)=>setData(res))


fetch("https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY", requestOptions)
.then(response => setData(response.text()))
.then(result => console.log(result))
.catch(error => console.log('error', error));

    },3000)
  },[])


  console.log("data",data);
  return (
    <div className="App">
  
    </div>
  );
}

export default App;
