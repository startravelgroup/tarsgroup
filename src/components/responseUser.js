import React from 'react'
import '../style/responseUser.css'

const ResponseUser = (props) =>(
    <div className="responseUser">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <p>Login: {props.login}</p>

        <form className="formUser" onSubmit={props.getUser}>
            <button>Obter usuario</button>
        </form>
    </div>
    
)

export default ResponseUser;