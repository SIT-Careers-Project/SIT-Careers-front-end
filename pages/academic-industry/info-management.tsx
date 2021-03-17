import AnnouncementPage from '../../features/Academic-Industry/pages/announcement-info'
import { MainLayout } from '../../core/components/Layout/Main'
import React from 'react'

const CompanyInfo = ({ authContext }) => {
  return (
    <MainLayout authContext={authContext}>
      <div className="flex justify-center mt-16">
        <AnnouncementPage />
      </div>
    </MainLayout>
  )
}

export default CompanyInfo
