import axios from "axios";

console.log( "Script is running" );

// 1. Data Fetchen

// Create reference
const list = document.getElementById( "list-of-users" );

// De syntax van een asynchrone arrow functie:
// const fetchData = async () => { "EXECUTE CODE" }
// De syntax voor een IIFE (Immediately Invoked Function Expression):
// (async () => { "EXECUTE CODE" })()

// Asynchrone functie (normale syntax):
async function fetchData( id ) {

    const URI = "https://jsonplaceholder.typicode.com/";
    const ENDPOINT = "users";

    try {

        const response = await axios.get( URI + ENDPOINT, {
            params: {
                // Geef parameters mee aan de request of laat m leeg als er geen data in het input veld staat
                id: id || null
            }
        } );
        // Log de volledige response (de content zit in 'data')
        console.log( response );

        // Leeg de lijst bij aanvang
        list.replaceChildren()

        // Map door de data heen
        response.data.map( ( user ) => {
            const item = document.createElement( "li" );
            item.setAttribute( "class", "username" );
            item.textContent = user.name;

            // Voeg alle items toe aan list
            list.appendChild( item );
        } );


    } catch ( err ) {

        // Log de errors
        console.error( err );

        // Verwijzing naar error message
        const errorMessage = document.getElementById( "error-message" );

        // Check welke error message van toepassing is
        if ( err.response.status === 404 ) {
            errorMessage.textContent = "Page Not Found | 404";
        }
        if ( err.response.status === 500 ) {
            errorMessage.textContent = "Internal Server Error | 500";
        }

    }

}

// 2. Event Listener

// Create reference
const btn = document.getElementById( "button" );
const userId = document.getElementById( "user-id" );

// Implement event listener
btn.addEventListener( "click", () => {
    // Voeg de input value toe als argument (daarom ook een callback)
    fetchData( userId.value );
} );


