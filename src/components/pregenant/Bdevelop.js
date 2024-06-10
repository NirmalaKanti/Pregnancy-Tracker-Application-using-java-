
import React, { useEffect,useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './About.css';
import axios from 'axios';


export default function Bdevelop() {
  const navigate = useNavigate();
  const [lastPeriod, setLastPeriod] = useState("");
  const [fetusAgeWeeks, setFetusAgeWeeks] = useState("");
  const [fetusAgeDays, setFetusAgeDays] = useState("");
  const [pregnancyConfirmed, setPregnancyConfirmed] = useState("");
  const [pregnancies, setUsers] = useState([]);

  

    useEffect(() => {
      (async () => await Load())();
    }, []);

    async function  Load()
    {
       const result = await axios.get(
           "http://localhost:8084/api/v1/pregnancy/getAll");
           setUsers(result.data);
           console.log(result.data);
    }

    async function save(event)
    {
        event.preventDefault();
    try
        {
         const response=await axios.post("http://localhost:8084/api/v1/pregnancy/save",
        {
                  name: localStorage.getItem("name"),
                  email: localStorage.getItem("email"),
                 password:localStorage.getItem("password"),
                 confirmPassword:localStorage.getItem("confirmPassword"),
                lastPeriod: lastPeriod,
                fetusAgeWeeks: fetusAgeWeeks,
                fetusAgeDays: fetusAgeDays,
                pregnancyConfirmed: pregnancyConfirmed
          
        });



        const isNewUser = response.data.isNewUser;
        if (!isNewUser) {
          // If it's an existing user, update localStorage with the email
          localStorage.setItem("lastPeriod", lastPeriod);
          localStorage.setItem("fetusAgeWeeks", fetusAgeWeeks);
          localStorage.setItem("fetusAgeDays", fetusAgeDays);
          localStorage.setItem("pregnancyConfirmed", pregnancyConfirmed);
          
        }

        handleDateChange(lastPeriod);
        
          alert("data saved Successfully");
          navigate("/pregenant/welcome");
          setLastPeriod("");
          setFetusAgeWeeks("");
          setFetusAgeDays("");
          setPregnancyConfirmed("");
          Load();
        }
    catch(err)
        {
          alert("Data Saved");
        }
   }

   



  const handleDateChange = (date) => {
    setLastPeriod(date);
    const today = new Date();
    const ageInMilliseconds = today - date;
    const ageInWeeks = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 7));
    const remainingDays = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    setFetusAgeWeeks(ageInWeeks);
    setFetusAgeDays(remainingDays);
  };

  const handleConfirmation = (isConfirmed) => {
    setPregnancyConfirmed(isConfirmed);
  };




  const handleSubmit = () => {
  };

  return (
    <> 
    <div className='body'>
    <div className="bdevelop-container">
      <h2 className="tracker-title">Baby Development Tracker</h2>
      <div className="form-group">
        <label htmlFor="lastPeriod" className="input-label">Select your last period:</label>
        <DatePicker
          selected={lastPeriod}
          onChange={handleDateChange}
          dateFormat="MM/dd/yyyy"
          className="form-control date-picker"
        />
      </div>
      <h2 className="tracker-title">Are you confirmed your pregnancy?</h2>

      <div className="confirmation-buttons">
        <button onClick={() => handleConfirmation(true)} className="confirmation-btn" value="yes">Yes</button>
        <button onClick={() => handleConfirmation(false)} className="confirmation-btn" value="yes">No</button>
      </div>
      <button onClick={save} className="submit-btn">
        Submit
      </button>
      {pregnancyConfirmed && fetusAgeWeeks !== null && (
        <div className="fetus-age">
          <h2 className="tracker-title5">Congradulations on your Pregnancy </h2>
          <h3 className="fetus-age-title">Your Fetus Age:</h3>
          <p className="fetus-age-value">{fetusAgeWeeks} weeks {fetusAgeDays} days</p>
        </div>
      )}

     {!pregnancyConfirmed &&  fetusAgeWeeks !== null && (
        <div className="fetus-age">
          <h2 className="tracker-title5">Get confirmation and wait for Goodnews  </h2>
        </div>
      )}
    </div>
    </div>
    </>
  );
}
