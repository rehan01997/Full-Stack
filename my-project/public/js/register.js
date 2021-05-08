function onSubmitLoginForm( event ) {
    // We shall be submitting the form inputs through an Ajax call
    event.preventDefault();

    // do validations

    // if all validations pass...
    axios.post(
        'https://mymeetingsapp.herokuapp.com/api/auth/register',
        {
            name : document.querySelector('#name').value,
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
            console.log(json);

            // take user to landing page
            window.location = './login.html';
        })
        .catch( error => console.log( error ) );
}

function renderRegister() {
    document.querySelector( '.register-wrapper' ).innerHTML = `
        <form method="post" id="register-form">
            <label for="name">Name</label>
            <input type="text" placeholder="Enter Name" id="name" name="name" />

            <label for="email">Email</label>
            <input type="email" placeholder="john.doe@example.com" id="email" name="email />

            <label for="password">Password</label>
            <input type="password" placeholder="password" id="password" name="password" />

            <input type="submit" value="Login" />
        </form>
    `;
}

renderRegister();
document.querySelector( '#register-form' ).addEventListener( 'submit', onSubmitLoginForm );