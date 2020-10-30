import React,{useState} from 'react'
import { Query,useQuery } from 'react-apollo'
import gql from 'graphql-tag'
const languagesList=(code)=>gql`
{
    country(code: "${code}") {
      languages {
        name
      }
    }
  }`;
const mergeLanguage=(l)=>{
    let ans=""
    l.map(lang=>{
        ans+=lang.name+','
    })
    return ans.slice(0,ans.length-1)
}
const Languages=(props)=>{
    const res=useQuery(languagesList(props.code))
    // console.log(res)
    if(res.loading) return <p>LOADING</p>
    if(res.error) return <p>{res.error}</p>
    console.log(res.data)
    return(
        <p>{mergeLanguage(res.data.country.languages)}</p>
    )
}
export default Languages

