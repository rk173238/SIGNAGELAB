import React,{Component,useState} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Query,useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import { Button } from '@material-ui/core';
import Languages from './Languages/Languages';
const list=gql`
            query list{
                countries{
                    code
                    name
                    capital
                    continent{
                        name
                    }
                    languages{
                        code
                        name
                    }
                }
            }`;
const CountriesList =(props)=>{
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    
    const res=useQuery(list)
    console.log(res)

    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    
    if(res.loading) return <p>LOADING</p>
    if(res.error) return <p>{res.error}</p>
    let data=res.data
    console.log(data)
    return(
        <div>
            <Table>
                <TableHead>
                    <TableRow style={{backgroundColor:'rgba(190, 34, 195, 0.62)'}}>
                        <TableCell>Name</TableCell>
                        <TableCell>Capital</TableCell>
                        <TableCell>Languages</TableCell>
                        <TableCell>Continent</TableCell>
                        <TableCell>Explore</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.countries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((country,i)=>(
                        <TableRow key={country.code} 
                            style={i%2===0?
                                {backgroundColor:'rgba(34, 133, 195, 0.62)',cursor:'pointer'}
                                :{backgroundColor:'rgba(34, 195, 112, 0.62)',cursor:'pointer'}}>
                            <TableCell>{country.name}</TableCell>
                            <TableCell>{country.capital}</TableCell>
                            <TableCell><Languages code={country.code}/></TableCell>
                            <TableCell>{country.continent.name}</TableCell>
                            <TableCell><Button variant="contained" color="primary" >{country.code}</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={data.countries.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    )
}
export default CountriesList;