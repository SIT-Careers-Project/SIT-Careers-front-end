import Report from '../../features/Report-Management/pages/report-info'
import { MainLayout } from '../../core/components/Layout/Main'
import React, { useEffect } from 'react'
import Router from 'next/router'
import { checkLoggedIn } from 'core/services/utils'

const ReportInfo = ({ authContext }) => {
  useEffect(() => {
    authContext.fetchMe().then(() => {
      const path = checkLoggedIn(authContext.isLoggedIn, ['admin'], authContext.roleUser)
      Router.replace(path)
    })
  }, [authContext])

  return (
    <MainLayout authContext={authContext}>
      <div className="flex justify-center mt-16">
        <Report />
      </div>
    </MainLayout>
  )
}

export default ReportInfo
