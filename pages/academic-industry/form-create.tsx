import FormCreate from 'features/Academic-Industry/pages/announcement-form'
import { MainLayout } from 'core/components/Layout/Main'
import React, { useEffect } from 'react'
import Router from 'next/router'
import { checkLoggedIn } from 'core/services/utils'

const AnnouncementForm = ({ authContext }) => {
  useEffect(() => {
    authContext.fetchMe().then(() => {
      const path = checkLoggedIn(
        authContext.isLoggedIn,
        ['admin', 'manager', 'coordinator'],
        authContext.roleUser
      )
      Router.replace(path)
    })
  }, [authContext])

  return (
    <MainLayout authContext={authContext}>
      <div className="flex justify-center mt-16">
        <FormCreate />
      </div>
    </MainLayout>
  )
}

export default AnnouncementForm
