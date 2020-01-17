import React from 'react';
import AvatarExample from '../../styles/assets/avatar-example.png';
import NoAvatar from '../../styles/assets/no-avatar.png';
import '../../styles/design/element-styles/avatar.css';
import DesignNavi from '../design-navi';

const Avatars = () => {
    return (
        <div className="grid-display">
            <DesignNavi />
        
        <div className="primary-container">
            <div className="page-heading">
                <h1>Avatars</h1>
                <p className="article-section">Personalisation is an important part of a users familiarisation with using an application regularly. As such avatars are supported within our applications,
                the implementation of them is limited to specific use cases, initially focused around user management & my profile in the early stages. </p>
            </div>
            <div className="page-content">
                <div className="avatar-example">
                <img src={AvatarExample} alt="Avatar example" />
                </div>
                <div className="container-row avatar">
                    <div>
                        <h3>Card List version (38px)</h3>
                        <p>The card list use case will be displayed using 
                        the above properties this is rigid based on the
                        card height within the listing component.</p>
                        <div className="avatar-position">
                            <img className="cardversion" src={AvatarExample} alt="Card List Avatar" />
                        </div>
                    </div>
                    <div>
                        <h3>Logged in user version (45px)</h3>
                        <p>In the top right corner of all applications the currently
                        logged in user will be shown, by the users name &
                        Avatar. </p>
                        <div className="avatar-position">
                            <img className="loggedinversion" src={AvatarExample} alt="Card List Avatar" />
                        </div>
                    </div>
                    <div>
                    <h3>My Profile panel version (66px)</h3>
                        <p>The my profile slide out panel, provides the user
                            with the ability to manage their account. The
                            Avatar image is shown within this panel.</p>
                        <div className="avatar-position">
                            <img className="profileversion" src={AvatarExample} alt="Card List Avatar" />
                        </div>
                    </div>
                    <div>
                    <h3>User Details version (180px)</h3>
                        <p>Within in the user details page the avatar is displayed.</p>
                        <div className="avatar-position">
                            <img className="userdetailsversion" src={AvatarExample} alt="Card List Avatar" />
                        </div>
                    </div>
                </div>
                <h3>Avatar - No Image</h3>
                    <p>Where no image has been added to the users profile, the avatar image will be replaced with the users initials, as per the example below.</p>
               
                    <div className="container-row avatar">
                    <div>
                        <h3>Card List version</h3>
                        <p>The card list use case will be displayed using 
                        the above properties this is rigid based on the
                        card height within the listing component.</p>
                        <div className="avatar-position">
                            <img className="cardversion" src={NoAvatar} alt="Card List Avatar" />
                        </div>
                    </div>
                    <div>
                        <h3>Logged in user version</h3>
                        <p>In the top right corner of all applications the currently
                        logged in user will be shown, by the users name &
                        Avatar. </p>
                        <div className="avatar-position">
                            <img className="loggedinversion" src={NoAvatar} alt="Card List Avatar" />
                        </div>
                    </div>
                    <div>
                    <h3>My Profile panel version</h3>
                        <p>The my profile slide out panel, provides the user
                            with the ability to manage their account. The
                            Avatar image is shown within this panel.</p>
                        <div className="avatar-position">
                            <img className="profileversion" src={NoAvatar} alt="Card List Avatar" />
                        </div>
                    </div>
                    <div>
                    <h3>User Details version</h3>
                        <p>Within in the user details page the avatar is displayed.</p>
                        <div className="avatar-position">
                            <img className="userdetailsversion" src={NoAvatar} alt="Card List Avatar" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>


    );
}

export default Avatars;