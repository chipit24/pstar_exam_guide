import React from 'react';
import { Link } from 'react-router';

const MainLayout = props => {
  let backLink;
  if (window.location.pathname !== '/') {
    backLink = <Link style={{ textDecoration: 'none', position: 'absolute' }} to="/">« Back to index</Link>;
  }
  
  return (
    <div>
      {backLink}
      <h1 className="main_header">
        <abbr title="Student Pilot Permit or Private Pilot Licence for Foreign and Military Applicants, Aviation Regulation Examination">PSTAR</abbr> Guide
      </h1>
      {props.children}
    </div>
  );
};

export default MainLayout;