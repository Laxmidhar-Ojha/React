import { useState,useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
    const data=useLoaderData();
//    useEffect(()=>{
//     fetch("https://api.github.com/users/Laxmidhar-Ojha")
//     .then((data)=>data.json())
//     .then((data)=>{
//         setData(data)
//         console.log(data);
//     })
//    },[])
  return (
    <>
    <img src={data.avatar_url} alt="Profile Image" />
    <h1>followers: {data.followers}</h1>
    </>
  )
}

export default GitHub;

export const fetchGitData=async ()=>{
    const data=await fetch("https://api.github.com/users/Laxmidhar-Ojha")
    return data.json();
}