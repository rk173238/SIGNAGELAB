import { Home } from '@material-ui/icons'
import React,{Component} from 'react'
import CountriesList from './CountriesList/CountriesList'


class Homepage extends Component{


    render(){

        return(
            <div>
                <CountriesList continent=""></CountriesList>
            </div>
        )
    }
}
export default Homepage