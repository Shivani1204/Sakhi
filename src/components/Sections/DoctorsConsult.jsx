import React from 'react';
import './DoctorsConsult.css'; // Importing CSS file for styling

const DoctorsConsult = () => {
  // Dummy data for doctors (replace with real data from your backend)
  const doctors = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialist: "Gynecologist",
      photo: "https://example.com/doctor1.jpg",
    },
    {
      id: 2,
      name: "Dr. Neha Patel",
      specialist: "Endocrinologist",
      photo: "https://example.com/doctor2.jpg",
    },
    // Add more doctors as needed
  ];

  return (
    <div>
      <h1>Consult Menstrual Cycle Specialists</h1>
      <div className="doctors-list">
        {doctors.map(doctor => (
          <div key={doctor.id} className="doctor-card">
            <img src={doctor.photo} alt={doctor.name} />
            <div className="doctor-details">
              <h2>{doctor.name}</h2>
              <p>{doctor.specialist}</p>
              <button>Book Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsConsult;
