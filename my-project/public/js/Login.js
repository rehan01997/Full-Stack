function onSubmitLoginForm( event ) {
    // We shall be submitting the form inputs through an Ajax call
    event.preventDefault();

    // do validations

    // if all validations pass...
    axios.post(
        'https://mymeetingsapp.herokuapp.com/api/auth/login',
        {
            email: document.querySelector( '#email' ).value,
            password: document.querySelector( '#password' ).value
        },
        {   
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then( response => response.data )
        .then( json => {
            localStorage.setItem( 'email', json.email );
            localStorage.setItem( 'authToken', json.token );

            // take user to landing page
            window.location = './index.html';
        })
        .catch( error => console.log( error ) );
}

function renderLogin() {
    document.querySelector( '.login-wrapper' ).innerHTML = `
        <form method="post" id="login-form">
            <label for="email">Email</label>
            <input type="email" placeholder="john.doe@example.com" id="email" name="email />

            <label for="password">Password</label>
            <input type="password" placeholder="password" id="password" name="password" />

            <input type="submit" value="Login" />
        </form>
    `;
}

renderLogin();
document.querySelector( '#login-form' ).addEventListener( 'submit', onSubmitLoginForm );