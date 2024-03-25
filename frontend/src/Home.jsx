import React from 'react'
import {Box,Stack} from "@chakra-ui/react"
import Card from './Card'
import axios from "axios"

const Home = () => {

  const checkouthandler =async(amount)=>{
    const {data:{key}}=await axios.get("http://localhost:8000/api/getkey")
    const {data:{order}}=await axios.post("http://localhost:8000/checkout",{amount})
    console.log(window);
    const options ={
      key,
      amount:order.amount,
      currency:"INR",
      name:"Omprakash",
      description:"Razorpay test",
      image:"https://media.licdn.com/dms/image/C5603AQFg_pUIwb0udg/profile-displayphoto-shrink_800_800/0/1600099710214?e=2147483647&v=beta&t=f1_qYeIOievrlrF5xf7IgiDlirJOlcZAMdKb0BazUUQ",
      order_id:order.id,
      callback_url:"http://localhost:8000/paymentverification",
      prefill:{
        name:"omprakash kumar",
        email:"omprakashkumar@gmail.com",
        contact:"9708082526"
      },
      notes:{
        "address":"razorapy official"
      },
      theme:{
        "color":"#3399cc"
      }
    };
    const razor = new window.Razorpay(options);
    razor.open();

  }

  return (
    <Box>
    <Stack h={"100vh"} justifyContent={"center"} alignItems={"center"} direction={["column","row"]}>
     <Card amount={3000} img={"https://imgeng.jagran.com/images/2023/sep/best%2015%20inch%20laptops%20in%20India1695872319038.jpg"} checkouthandler={checkouthandler}  />
     <Card amount={3000} img={"https://images.pexels.com/photos/18285166/pexels-photo-18285166/free-photo-of-toast-with-glasses-of-cold-drinks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} checkouthandler={checkouthandler}  />
     <Card amount={3000} img={"https://m.media-amazon.com/images/I/61+r3+JstZL._AC_UF1000,1000_QL80_.jpg"} checkouthandler={checkouthandler}  />
     <Card amount={3000} img={"https://images.pexels.com/photos/18285166/pexels-photo-18285166/free-photo-of-toast-with-glasses-of-cold-drinks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} checkouthandler={checkouthandler}  />
     <Card amount={3000} img={"https://images.pexels.com/photos/18285166/pexels-photo-18285166/free-photo-of-toast-with-glasses-of-cold-drinks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} checkouthandler={checkouthandler}  />
     <Card amount={3000} img={"https://images.pexels.com/photos/18285166/pexels-photo-18285166/free-photo-of-toast-with-glasses-of-cold-drinks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} checkouthandler={checkouthandler}  />

    </Stack>
  </Box>
  )
}

export default Home