import React,{useState} from 'react'
import { Query,useQuery } from 'react-apollo'
import gql from 'graphql-tag'
const details=(code)=>gql`
{
    country(code: "${code}") {
        name
        native
        phone
        continent{
          name
        }
        capital
        currency
        languages{
          name
        }
        emoji
        emojiU
        states{
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
const CountryDetails =(props)=>{
    const res=useQuery(details(props.code))
    console.log(res)
    if(res.loading) return <p>LOADING</p>
    if(res.error) return <p>{res.error}</p>
    let data=res.data.country
    return(
        <div>
           <p>Country Name:{data.name}</p>
           <p>Capital Name:{data.capital}</p>
           <p>Continent:{data.continent.name}</p>
           <p>Country Native:{data.native}</p>
           <p>Country Phone:{data.phone}</p>
           <p>Country Cur:{data.currency}</p>
           <p>Country Emoji:{data.emoji}</p>
           <p>Country EmojiU:{data.emojiU}</p>
           <p>Languages:{mergeLanguage(data.languages)}</p>
           <p>States:{mergeLanguage(data.states)}</p>

        </div>
    )
}
export default CountryDetails