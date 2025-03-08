import PropTypes from "prop-types";

function UserLogged(props){
    const welcomeMessage = <h1>Welcome {props.username || "Guest"}</h1>
    const loginPrompt = <h1>Please Login to Continue</h1>

    return (
        props.isLogged ? welcomeMessage : loginPrompt
    );
}
UserLogged.proptypes = {
    username : PropTypes.string,
    isLogged : PropTypes.bool
}


export default UserLogged