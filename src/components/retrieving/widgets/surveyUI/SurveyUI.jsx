import React from 'react';
import './ProfileCard.css';

export default function SurveyUI({ profile }) {
  return (
    <div className="profile-card">
      <img src={profile.photo} alt="Profile" />
      <h4>{profile.name}</h4>
      <p>{profile.bio}</p>
    </div>
  );
};