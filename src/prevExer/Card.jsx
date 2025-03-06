import profilePic from './assets/unnamed.jpg'

function Card(){
    return (
        <div className="card">
            <img className='card-images' src={profilePic} alt="profile-picture" />
            <h2>Ram</h2>
            <p>I build stuffs...</p>
        </div>
    );
}

export default Card