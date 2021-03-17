import FormCreate from '../../features/Academic-Industry/pages/announcement-form'
import { MainLayout } from '../../core/components/Layout/Main'
import React from 'react'

const AnnouncementForm = ({ authContext }) => {
  return (
    <MainLayout authContext={authContext}>
      <div className="flex justify-center mt-16">
        <FormCreate />
      </div>
    </MainLayout>
  )
}

export default AnnouncementForm
