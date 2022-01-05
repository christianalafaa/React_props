import React from 'react'
import PropTypes from 'prop-types'

function Profile(props) {
    const {fullName, bio, profession, handleName} = props

    return (
        <div>
            <p>Full name: {fullName}</p>
            <p>Bio: {bio}</p>
            <p>Profession: {profession}</p>
                <button onClick={()=> handleName (fullName)}>Click me</button>
            <div>{props.children}</div>
        </div>
    )
}

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
}

Profile.defaultProps = {
    fullName: 'Name',
    bio: 'About Kris',
    profession: 'What Kris does'
}

export default Profile
