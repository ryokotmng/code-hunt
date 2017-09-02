import React from 'react';

class ProfileMenu extends React.Component {
  renderProfileNav() {
    return (
      <nav className="profile-nav" ref="profileNav">
        <a href="#">My Profile</a>
        <a href="#">Logout</a>
      </nav>
    );
  }

  render() {
    return (
      <section className="profile-menu">
        <img src="/img/NERV.jpg" className="profile-btn medium-avatar"/>
        {this.renderProfileNav()}
      </section>
    );
  }
}

export default ProfileMenu;