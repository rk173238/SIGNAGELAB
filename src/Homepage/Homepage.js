import { Home } from '@material-ui/icons'
import React,{Component} from 'react'
import CountriesList from './CountriesList/CountriesList'


//Homepage class base component
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