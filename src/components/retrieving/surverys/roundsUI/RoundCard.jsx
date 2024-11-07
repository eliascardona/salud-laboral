export default function RoundCard() {
    return (
        <div className="Prueba__card">
            <div className="Prueba__card-header">
                <div className="Prueba__header-left">
                    <img
                        src="https://via.placeholder.com/40?text=J001"
                        alt="Job Logo"
                        className="Prueba__main-logo"
                    />
                    <div className="Prueba__title-container">
                        <div className="Prueba__title">Google LLC</div>
                        <div className="Prueba__subtitle">Sr. UI Designer</div>
                    </div>
                </div>
                <button className="Prueba__extra-btn">
                    <FaEllipsisV />
                </button>
            </div>
            <div className="Prueba__card-content Prueba__job-card">
                <img
                    alt="Company logo"
                    height="50"
                    src="https://storage.googleapis.com/a1aa/image/hKmykEjVE4KXDxodnAuhYUcvBOVVt7f82HmUDjWX3lTJji0JA.jpg"
                    width="50"
                />
                <div className="Prueba__description">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley.
                    </p>
                </div>
                <div className="Prueba__tags">
                    <span>Fulltime</span>
                    <span>Remote</span>
                    <span>Hourly</span>
                </div>
                <div className="Prueba__location">
                    <FaMapMarkerAlt />
                    <span>Pennsylvania, USA</span>
                </div>
                <div className="Prueba__date">
                    <FaClock />
                    <span>2 days ago</span>
                </div>
                <button className="Prueba__apply-btn">Apply</button>
            </div>
        </div>
    )
}