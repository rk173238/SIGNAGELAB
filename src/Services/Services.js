import gql from 'graphql-tag'

export const Services={
    countriesList,
}
function countriesList(){

    return `
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
    }`
}