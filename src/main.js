import axios from "axios";

console.log( "Script is running" )

// 1. Data Fetchen

// Create reference
const list = document.getElementById( 'list-of-users' );

// const fetchData = async () => {}
async function fetchData( num ) {
    const URI = 'https://jsonplaceholder.typicode.com/'
    const ENDPOINT = 'users'


    try {
        const response = await axios.get( URI + ENDPOINT, {
            params: {
                // Geef parameters mee aan de request
                id: num || null
            }
        } );
        console.log(response)

        // Leeg de lijst
        list.replaceChildren()

        // Map door de data heen
        response.data.map( ( user ) => {
            // Create new element with attributes
            const item = document.createElement( 'li' );
            item.setAttribute( 'class', 'username' );
            item.textContent = user.name


            // Voeg alle items toe aan list
            list.appendChild( item )
        } )

    } catch ( error ) {

        // Verwijzing naar error message
        const errorMessage = document.getElementById('error-message');

        // Check welke error message van toepassing is
        if ( error.response.status === 404 ) {
            errorMessage.textContent = "Page Not Found | 404"
        }
        if ( error.response.status === 500 ) {
            errorMessage.textContent = "Internal Server Error | 500"
        }
    }
} // IIFE --> Immediately Invoked Function Expression

// PAUZE HIER!

// 2. Event Listeners
// Create reference
const id = document.getElementById( 'user-id' )
const btn = document.getElementById( 'button' )

// Implement event listener
btn.addEventListener( 'click', () => {
    fetchData( id.value )
} )