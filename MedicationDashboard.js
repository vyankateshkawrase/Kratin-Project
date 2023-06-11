import React, { useState } from 'react';
import './MedicationDashboard.css';

const MedicationDashboard = () => {
  const [medications, setMedications] = useState([]);
  const [newMedication, setNewMedication] = useState({
    name: '',
    dosage: '',
    frequency: '',
    timing: ''
  });

  const [selectedMedication, setSelectedMedication] = useState(null);

  const handleInputChange = (event) => {
    setNewMedication({
      ...newMedication,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedMedication) {
      const updatedMedications = medications.map((medication) => {
        if (medication.id === selectedMedication.id) {
          return { ...medication, ...newMedication };
        }
        return medication;
      });
      setMedications(updatedMedications);
      setSelectedMedication(null);
    } else {
      const newMed = { ...newMedication, id: Date.now().toString() };
      setMedications([...medications, newMed]);
    }
    setNewMedication({
      name: '',
      dosage: '',
      frequency: '',
      timing: ''
    });
  };

  const handleEdit = (medication) => {
    setSelectedMedication(medication);
    setNewMedication(medication);
  };

  const handleDelete = (medication) => {
    const updatedMedications = medications.filter((med) => med.id !== medication.id);
    setMedications(updatedMedications);
  };

  return (
    <div className="medication-dashboard">
      <header className="header">
        <h1 className="header-title">Medication Dashboard</h1>
      </header>

      <div className="medication-content">
        <div className="medication-form">
          <h2>{selectedMedication ? 'Edit Medication' : 'Add New Medication'}</h2>
          <form onSubmit={handleSubmit}>
            <input type="number" name="id" placeholder="Medication Id" value={newMedication.id} onChange={handleInputChange} required />
            <input type="text" name="name" placeholder="Medication Name" value={newMedication.name} onChange={handleInputChange} required />
            <input type="text" name="dosage" placeholder="Dosage" value={newMedication.dosage} onChange={handleInputChange} required />
            <input type="text" name="frequency" placeholder="Frequency" value={newMedication.frequency} onChange={handleInputChange} required />
            <input type="text" name="timing" placeholder="Timing" value={newMedication.timing} onChange={handleInputChange} required />
            <button type="submit">{selectedMedication ? 'Update Medication' : 'Add Medication'}</button>
          </form>
        </div>

        <div className="medication-list">
          {medications.map((medication) => (
            <div className="medication-item" key={medication.id}>
              <div className="medication-name">{medication.name}</div>
              <div className="medication-details">
                <div><strong>Medication id:</strong> {medication.id}</div>
                <div><strong>Medication Name:</strong> {medication.name}</div>
                <div><strong>Dosage:</strong> {medication.dosage}</div>
                <div><strong>Frequency:</strong> {medication.frequency}</div>
                <div><strong>Timing:</strong> {medication.timing}</div>
              </div>
              <div className="medication-actions">
                <button className="edit" onClick={() => handleEdit(medication)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(medication)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2023 Medication Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MedicationDashboard;
