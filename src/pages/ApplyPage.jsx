import { useState } from 'react'
import './ApplyPage.css'

const ApplyPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    major: '',
    year: '',
    experience: '',
    motivation: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Application submitted successfully! We will contact you soon.')
  }

  return (
    <div className="apply-page">
      <div className="container">
        <div className="apply-header">
          <h1 className="apply-gradient-text">Apply to NUST Summer Program</h1>
          <p>Join us for an amazing summer learning experience</p>
        </div>

        <div className="apply-content">
          <div className="apply-info">
            <h2>Program Details</h2>
            <div className="info-cards">
              <div className="info-card">
                <h3>Duration</h3>
                <p>8 weeks intensive program</p>
              </div>
              <div className="info-card">
                <h3>Start Date</h3>
                <p>June 15, 2024</p>
              </div>
              <div className="info-card">
                <h3>Location</h3>
                <p>NUST Campus, Islamabad</p>
              </div>
            </div>
          </div>

          <div className="apply-form-container">
            <form className="apply-form" onSubmit={handleSubmit}>
              <h2>Application Form</h2>
              
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="university">University/Institution *</label>
                <input
                  type="text"
                  id="university"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="major">Major/Field of Study *</label>
                <input
                  type="text"
                  id="major"
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="year">Academic Year *</label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Year</option>
                  <option value="1st">1st Year</option>
                  <option value="2nd">2nd Year</option>
                  <option value="3rd">3rd Year</option>
                  <option value="4th">4th Year</option>
                  <option value="graduate">Graduate</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="experience">Previous Experience (Optional)</label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Describe any relevant experience..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="motivation">Why do you want to join this program? *</label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  rows="4"
                  required
                  placeholder="Tell us about your motivation and goals..."
                />
              </div>

              <button type="submit" className="btn-primary submit-btn">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplyPage
