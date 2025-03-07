import PropTypes from "prop-types"

function Student(props){
    return(
        <div className="student">
            <p>name : {props.name || "Guest"}</p>
            <p>age : {props.age ?? 0}</p>
            <p>Student : {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}
Student.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool
}

export default Student