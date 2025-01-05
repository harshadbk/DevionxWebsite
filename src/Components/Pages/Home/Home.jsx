import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>
      <main>
        <div className="content">
          <h1 className='primary-txt'>Transforming Ideas</h1>
          <h1 className="secondary-txt">Into Digital Reality</h1>
          <p className="info">
            Empowering businesses with cutting-edge software solutions. From web development to AI & ML applications, we bring innovation to life.
          </p>
          <div className="btns">
            <a href="/getmore" className='hover'>Get Started</a>
            <a href="/learnmore" className='btn' >Learn More</a>
          </div>
        </div>

        <div className="dashboard">
          <div className="card">
            <div className="box-1">
              <h1 className='dashboard-heading blue'>200+</h1>
              <p className='dashboard-para '>Projects Completed</p>
            </div>
            <div className="box-2">
              <h1 className='dashboard-heading purple'>50+</h1>
              <p className='dashboard-para'>Happy Clients</p>
            </div>
          </div>
          <div className="card">
            <div className="box-3">
              <h1 className='dashboard-heading dark-blue'>15+</h1>
              <p className='dashboard-para'>Expert Teams</p>
            </div>
            <div className="box-4">
              <h1 className='dashboard-heading red'>24/7</h1>
              <p className='dashboard-para'>Support</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home