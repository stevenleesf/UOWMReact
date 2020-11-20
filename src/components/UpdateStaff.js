import React, { useState, useEffect } from 'react'
import AuthService from "../services/TutorialService.js";
import { Button } from "./Button";

const UpdateStaff = props => {
    const initialTutorialState = {
        name: "",
        gender: "",
        age: "",
        bio : "",
        qualification_acedemic : "",
        institution_acedemic : "",
        qualification_acedemic2 : "",
        institution_acedemic2 : "",
        qualification_acedemic3 : "",
        institution_acedemic3 : "",
        organisation : "",
        role : "",
        year : "",
        level : "",
        role_admin : "",
        level_admin : "",
        start_admin : "",
        end_admin : "",
        area_expertise : "",
        area_expertise2 : "",
        area_expertise3 : "",
        area_expertise4 : "",
        area_expertise5 : "",
        book_pub : "",
        chp_book_pub : "",
        title_Areas : "",
        role_Areas : "",
        title_consult : "",
        role_consult: "",
        fromTo_consult : "",
        organisation_consult : "",
        title_consult2 : "",
        role_consult2 : "",
        fromTo_consult2 : "",
        organisation_consult2 : "",
        award : "",
        institution_award : "",
        year_award : "",
        activity_contribute : "",
        role_contribute : "",
        fromTo_contribute : "",
        name_degree : "",
        name_candidates : "",
        title_thesis : "",
        academic_level : "",
        course_teach : "",
        academic_teach : "",
        number_student_teach : "",
        hourContact_teach : ""
      
    };
    const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
    const [message, setMessage] = useState("");
  
    const getTutorial = id => {
        AuthService.getInfo(id)
        .then(response => {
          setCurrentTutorial(response.data);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };
  
    useEffect(() => {
      getTutorial(props.match.params.id);
    }, [props.match.params.id]);
  
    const handleInputChange = event => {
      const { name, value } = event.target;
      setCurrentTutorial({ ...currentTutorial, [name]: value });
    };
  
  
  
    const updateTutorial = () => {
        
        AuthService.updateStaff(currentTutorial.id, currentTutorial)
        .then(response => {
          console.log(response.data);
          setMessage("The tutorial was updated successfully!");
        })
        .catch(e => {
          console.log(e);
        });
    };
  
 
  
    return (
      <div>
          <div className="auth-container">
        {currentTutorial ? (
          <div className="edit-form">
            <h4>Update Staff Information</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  defaultValue={currentTutorial.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="text"
                  className="form-control"
                  id="age"
                  name="age"
                  defaultValue={currentTutorial.age}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <input
                  type="text"
                  className="form-control"
                  id="bio"
                  name="bio"
                  defaultValue={currentTutorial.bio}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="qualification_acedemic">Qualification "PhD"</label>
                <input
                  type="text"
                  className="form-control"
                  id="qualification_acedemic"
                  name="qualification_acedemic"
                  defaultValue={currentTutorial.qualification_acedemic}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="institution_acedemic">Institution "PhD</label>
                <input
                  type="text"
                  className="form-control"
                  id="institution_acedemic"
                  name="institution_acedemic"
                  defaultValue={currentTutorial.institution_acedemic}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="qualification_acedemic2">Qualification "Master"</label>
                <input
                  type="text"
                  className="form-control"
                  id="qualification_acedemic2"
                  name="qualification_acedemic2"
                  defaultValue={currentTutorial.qualification_acedemic2}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="institution_acedemic2">Institution "Master"</label>
                <input
                  type="text"
                  className="form-control"
                  id="institution_acedemic2"
                  name="institution_acedemic2"
                  defaultValue={currentTutorial.institution_acedemic2}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="qualification_acedemic3">Qualification "Degree"</label>
                <input
                  type="text"
                  className="form-control"
                  id="qualification_acedemic3"
                  name="qualification_acedemic3"
                  defaultValue={currentTutorial.qualification_acedemic3}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="institution_acedemic3">Institution "Degree"</label>
                <input
                  type="text"
                  className="form-control"
                  id="institution_acedemic3"
                  name="institution_acedemic3"
                  defaultValue={currentTutorial.institution_acedemic3}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="organisation">Organisation</label>
                <input
                  type="text"
                  className="form-control"
                  id="organisation"
                  name="organisation"
                  defaultValue={currentTutorial.organisation}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <input
                  type="text"
                  className="form-control"
                  id="role"
                  name="role"
                  defaultValue={currentTutorial.role}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="year">Year</label>
                <input
                  type="text"
                  className="form-control"
                  id="year"
                  name="year"
                  defaultValue={currentTutorial.year}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="level">Level</label>
                <input
                  type="text"
                  className="form-control"
                  id="level"
                  name="level"
                  defaultValue={currentTutorial.level}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="role_admin">Role</label>
                <input
                  type="text"
                  className="form-control"
                  id="role_admin"
                  name="role_admin"
                  defaultValue={currentTutorial.role_admin}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="level_admin">Level</label>
                <input
                  type="text"
                  className="form-control"
                  id="level_admin"
                  name="level_admin"
                  defaultValue={currentTutorial.level_admin}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="start_admin">Start</label>
                <input
                  type="text"
                  className="form-control"
                  id="start_admin"
                  name="start_admin"
                  defaultValue={currentTutorial.start_admin}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="end_admin">End</label>
                <input
                  type="text"
                  className="form-control"
                  id="end_admin"
                  name="end_admin"
                  defaultValue={currentTutorial.end_admin}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="area_expertise">Areas of Expertise 1</label>
                <input
                  type="text"
                  className="form-control"
                  id="area_expertise"
                  name="area_expertise"
                  defaultValue={currentTutorial.area_expertise}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="area_expertise2">Areas of Expertise 2</label>
                <input
                  type="text"
                  className="form-control"
                  id="area_expertise2"
                  name="area_expertise2"
                  defaultValue={currentTutorial.area_expertise2}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="area_expertise3">Areas of Expertise 3</label>
                <input
                  type="text"
                  className="form-control"
                  id="area_expertise3"
                  name="area_expertise3"
                  defaultValue={currentTutorial.area_expertise3}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="area_expertise4">Areas of Expertise 4</label>
                <input
                  type="text"
                  className="form-control"
                  id="area_expertise4"
                  name="area_expertise4"
                  defaultValue={currentTutorial.area_expertise4}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="area_expertise5">Areas of Expertise 5</label>
                <input
                  type="text"
                  className="form-control"
                  id="area_expertise5"
                  name="area_expertise5"
                  defaultValue={currentTutorial.area_expertise5}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="book_pub">Article in Academic Journals</label>
                <input
                  type="text"
                  className="form-control"
                  id="book_pub"
                  name="book_pub"
                  defaultValue={currentTutorial.book_pub}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="chp_book_pub">Book Chapter</label>
                <input
                  type="text"
                  className="form-control"
                  id="chp_book_pub"
                  name="chp_book_pub"
                  defaultValue={currentTutorial.chp_book_pub}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="title_Areas">Project title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title_Areas"
                  name="title_Areas"
                  defaultValue={currentTutorial.title_Areas}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="role_Areas ">Role</label>
                <input
                  type="text"
                  className="form-control"
                  id="role_Areas"
                  name="role_Areas"
                  defaultValue={currentTutorial.role_Areas }
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="title_consult">Project title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title_consult"
                  name="title_consult"
                  defaultValue={currentTutorial.title_consult}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="role_consult">Role</label>
                <input
                  type="text"
                  className="form-control"
                  id="role_consult"
                  name="role_consult"
                  defaultValue={currentTutorial.role_consult}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fromTo_consult">From To Until:</label>
                <input
                  type="text"
                  className="form-control"
                  id="fromTo_consult"
                  name="fromTo_consult"
                  defaultValue={currentTutorial.fromTo_consult}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="organisation_consult">Organisation</label>
                <input
                  type="text"
                  className="form-control"
                  id="organisation_consult"
                  name="organisation_consult"
                  defaultValue={currentTutorial.organisation_consult}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="title_consult2">Project title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title_consult2"
                  name="title_consult2"
                  defaultValue={currentTutorial.title_consult2}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="role_consult2">Role</label>
                <input
                  type="text"
                  className="form-control"
                  id="role_consult2"
                  name="role_consult2"
                  defaultValue={currentTutorial.role_consult2}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fromTo_consult2">From To Until</label>
                <input
                  type="text"
                  className="form-control"
                  id="fromTo_consult2"
                  name="fromTo_consult2"
                  defaultValue={currentTutorial.fromTo_consult2}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="organisation_consult2">Organisation</label>
                <input
                  type="text"
                  className="form-control"
                  id="organisation_consult2"
                  name="organisation_consult2"
                  defaultValue={currentTutorial.organisation_consult2}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="award">Name of Award</label>
                <input
                  type="text"
                  className="form-control"
                  id="award"
                  name="award"
                  defaultValue={currentTutorial.award}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="institution_award">Awarding Institution</label>
                <input
                  type="text"
                  className="form-control"
                  id="institution_award"
                  name="institution_award"
                  defaultValue={currentTutorial.institution_award}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="year_award">Year</label>
                <input
                  type="text"
                  className="form-control"
                  id="year_award"
                  name="year_award"
                  defaultValue={currentTutorial.year_award}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="activity_contribute">Activity</label>
                <input
                  type="text"
                  className="form-control"
                  id="activity_contribute"
                  name="activity_contribute"
                  defaultValue={currentTutorial.activity_contribute}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="role_contribute">Role</label>
                <input
                  type="text"
                  className="form-control"
                  id="role_contribute"
                  name="role_contribute"
                  defaultValue={currentTutorial.role_contribute}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fromTo_contribute">Timeline</label>
                <input
                  type="text"
                  className="form-control"
                  id="fromTo_contribute"
                  name="fromTo_contribute"
                  defaultValue={currentTutorial.fromTo_contribute}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name_degree">Name of Degree</label>
                <input
                  type="text"
                  className="form-control"
                  id="name_degree"
                  name="name_degree"
                  defaultValue={currentTutorial.name_degree}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name_candidates">Name of Candidates</label>
                <input
                  type="text"
                  className="form-control"
                  id="name_candidates"
                  name="name_candidates"
                  defaultValue={currentTutorial.name_candidates}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="title_thesis">Title of Thesis</label>
                <input
                  type="text"
                  className="form-control"
                  id="title_thesis"
                  name="title_thesis"
                  defaultValue={currentTutorial.title_thesis}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="academic_level">Academic level</label>
                <input
                  type="text"
                  className="form-control"
                  id="academic_level"
                  name="academic_level"
                  defaultValue={currentTutorial.academic_level}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="course_teach">Course Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="course_teach"
                  name="course_teach"
                  defaultValue={currentTutorial.course_teach}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="academic_teach">Academic Session</label>
                <input
                  type="text"
                  className="form-control"
                  id="academic_teach"
                  name="academic_teach"
                  defaultValue={currentTutorial.academic_teach}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="number_student_teach">Number of Student</label>
                <input
                  type="text"
                  className="form-control"
                  id="number_student_teach"
                  name="number_student_teach"
                  defaultValue={currentTutorial.number_student_teach}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="hourContact_teach">Number of Contact Hour</label>
                <input
                  type="text"
                  className="form-control"
                  id="hourContact_teach"
                  name="hourContact_teach"
                  defaultValue={currentTutorial.hourContact_teach}
                  onChange={handleInputChange}
                />
              </div>
  
            
            </form>
  

  
             <Button
            type="submit"
            className="badge badge-success"
            onClick={updateTutorial}
            buttonSize='btn--wide' 
            buttonColor='blue'
          >
            Update
          </Button>
          <p>{message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
        </div>
      </div>
    );
  };
  
  export default UpdateStaff;