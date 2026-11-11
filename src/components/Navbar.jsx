import React from 'react'


function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <div className="brand-icon">₹</div>
        <h2>Expense Tracker</h2>
      </div>

      <div className="nav-profile">
        <span className="profile-avatar">P</span>
        <span>My Dashboard</span>
      </div>
    </nav>
  );
}

export default Navbar;


