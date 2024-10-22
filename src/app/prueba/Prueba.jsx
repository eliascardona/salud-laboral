import React from 'react';
import './Prueba.css';
import {
  FaEllipsisV,
  FaFolder,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa';

export default function Prueba() {
  return (
    <div className="container">
      {/* Task Card */}
      <div className="card">
        <div className="card-header">
          <div className="header-left">
            {/* Reemplazo de <span class="main-code"> por <img> con URL en línea */}
            <img
              src="https://via.placeholder.com/40?text=T001"
              alt="Task Logo"
              className="main-logo"
            />
            <div className="title-container">
              <div className="title">My Task</div>
              <div className="subtitle">Task Management</div>
            </div>
          </div>
          <button className="extra-btn" aria-label="Más opciones">
            <FaEllipsisV />
          </button>
        </div>
        <div className="card-content">
          <div className="task-item">
            <div>
              <strong>Follow up client for feedback</strong>
              <p>
                <FaFolder /> Sending report
              </p>
            </div>
            <div className="status">
              <span className="time-badge">00:15</span>
              <FaCheckCircle className="status-icon green" />
            </div>
          </div>
          <div className="task-item">
            <div>
              <strong>Add new pages</strong>
              <p>
                <FaFolder /> Received report
              </p>
            </div>
            <div className="status">
              <span className="time-badge green">00:30</span>
              <FaCheckCircle className="status-icon green" />
            </div>
          </div>
          <div className="task-item">
            <div>
              <strong>Send time stamp report</strong>
              <p>
                <FaFolder /> Sending report
              </p>
            </div>
            <div className="status">
              <span className="time-badge">00:15</span>
              <FaCheckCircle className="status-icon green" />
            </div>
          </div>
        </div>
      </div>

      {/* Job Card */}
      <div className="card card-x2">
        <div className="card-header">
          <div className="header-left">
            <img
              src="https://via.placeholder.com/40?text=J001"
              alt="Job Logo"
              className="main-logo"
            />
            <div className="title-container">
              <div className="title">Google LLC</div>
              <div className="subtitle">Sr. UI Designer</div>
            </div>
          </div>
          <button className="extra-btn" aria-label="Más opciones">
            <FaEllipsisV />
          </button>
        </div>
        <div className="card-content job-card">
          <img
            alt="Company logo"
            height="50"
            src="https://storage.googleapis.com/a1aa/image/hKmykEjVE4KXDxodnAuhYUcvBOVVt7f82HmUDjWX3lTJji0JA.jpg"
            width="50"
          />
          <div className="description">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className="tags">
            <span>Fulltime</span>
            <span>Remote</span>
            <span>Hourly</span>
          </div>
          <div className="location">
            <FaMapMarkerAlt />
            <span>Pennsylvania, USA</span>
          </div>
          <div className="date">
            <FaClock />
            <span>2 days ago</span>
          </div>
          <button className="apply-btn">Apply</button>
        </div>
      </div>

      {/* Team Members Card */}
      <div className="card card-x3">
        <div className="card-header">
          <div className="header-left">
            <img
              src="https://via.placeholder.com/40?text=TM001"
              alt="Team Logo"
              className="main-logo"
            />
            <div className="title-container">
              <div className="title">Team members</div>
              <div className="subtitle">Team Management</div>
            </div>
          </div>
          <button className="extra-btn" aria-label="Más opciones">
            <FaEllipsisV />
          </button>
        </div>
        <div className="card-content">
          <div className="team-member">
            <img
              alt="David Jones"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/XKGAFrlnHNZTGhd4D59hmlcUQuntf8fPbnRid9fVbnTYMKSnA.jpg"
              width="40"
            />
            <div className="info">
              <h4>David Jones</h4>
              <p>Project Leader</p>
            </div>
            <div className="time">
              <span>5 min ago</span>
            </div>
          </div>
          <div className="team-member">
            <img
              alt="Robert Smith"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/l4D69CM1DM7eaiTKnPKlogpQf8BhrTSirkz7SLr36PNQGFpTA.jpg"
              width="40"
            />
            <div className="info">
              <h4>Robert Smith</h4>
              <p>HR Manager</p>
            </div>
            <div className="time">
              <span>Yesterday</span>
            </div>
          </div>
          <div className="team-member">
            <img
              alt="John Larry"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/b7UoddfeoPlSB0nc6aBDZY6YAwomsNBfa5KlW2xSbhPcMKSnA.jpg"
              width="40"
            />
            <div className="info">
              <h4>John Larry</h4>
              <p>Developer</p>
            </div>
            <div className="time">
              <span>1 hour ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Card */}
      <div className="card">
        <div className="card-header">
          <div className="header-left">
            <img
              src="https://via.placeholder.com/40?text=W001"
              alt="Weather Logo"
              className="main-logo"
            />
            <div className="title-container">
              <div className="title">New York</div>
              <div className="subtitle">Weather</div>
            </div>
          </div>
          <button className="extra-btn" aria-label="Más opciones">
            <FaEllipsisV />
          </button>
        </div>
        <div className="card-content weather-card">
          <img
            alt="Weather icon"
            height="100"
            src="https://storage.googleapis.com/a1aa/image/N9NxIRbz6sZ1MJffgNFb1v9XlQLuFvrgjpW0mg3uY7XTGFpTA.jpg"
            width="100"
          />
          <div className="temperature">25°C</div>
          <div className="condition">Sunny</div>
        </div>
      </div>

      {/* Profile Card */}
      <div className="card">
        <div className="card-header">
          <div className="header-left">
            <img
              src="https://via.placeholder.com/40?text=P001"
              alt="Profile Logo"
              className="main-logo"
            />
            <div className="title-container">
              <div className="title">Jane Doe</div>
              <div className="subtitle">Profile</div>
            </div>
          </div>
          <button className="extra-btn" aria-label="Más opciones">
            <FaEllipsisV />
          </button>
        </div>
        <div className="card-content profile-card">
          <img
            alt="Profile picture"
            height="100"
            src="https://storage.googleapis.com/a1aa/image/X7bMS3g3Wf1uQi5eDaHSFNGo6PN4azneZJgNfgZVLS2exoIdC.jpg"
            width="100"
          />
          <div className="bio">
            <p>
              Jane is a software engineer with 5 years of experience in web
              development. She loves coding and enjoys working on challenging
              projects.
            </p>
          </div>
          <button className="contact-btn">Contact</button>
        </div>
      </div>

      {/* Additional Task Card */}
      <div className="card card-x2">
        <div className="card-header">
          <div className="header-left">
            <img
              src="https://via.placeholder.com/40?text=T002"
              alt="Task Logo"
              className="main-logo"
            />
            <div className="title-container">
              <div className="title">My Task</div>
              <div className="subtitle">Task Management</div>
            </div>
          </div>
          <button className="extra-btn" aria-label="Más opciones">
            <FaEllipsisV />
          </button>
        </div>
        <div className="card-content">
          <div className="task-item">
            <div>
              <strong>Follow up client for feedback</strong>
              <p>
                <FaFolder /> Sending report
              </p>
            </div>
            <div className="status">
              <span className="time-badge">00:15</span>
              <FaCheckCircle className="status-icon green" />
            </div>
          </div>
          <div className="task-item">
            <div>
              <strong>Add new pages</strong>
              <p>
                <FaFolder /> Received report
              </p>
            </div>
            <div className="status">
              <span className="time-badge green">00:30</span>
              <FaCheckCircle className="status-icon green" />
            </div>
          </div>
          <div className="task-item">
            <div>
              <strong>Send time stamp report</strong>
              <p>
                <FaFolder /> Sending report
              </p>
            </div>
            <div className="status">
              <span className="time-badge">00:15</span>
              <FaCheckCircle className="status-icon green" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
