import ApplicationForm from '../../features/Academic-Industry/pages/announcement-application'
import Footer from '../../core/components/Footer'
import Navbar from '../../core/components/Navbar'
import React from 'react'

const Announcements = ({ authContext }) => {
  return (
    <>
      <div>
        <Navbar authContext={authContext} />
        <div className="flex justify-center mt-16">
          <ApplicationForm />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Announcements
