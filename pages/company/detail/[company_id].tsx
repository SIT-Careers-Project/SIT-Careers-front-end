import CompanyDetail from 'features/Company/pages/company-detail'
import { MainLayout } from 'core/components/Layout/Main'
import React, { useEffect } from 'react'
import Router from 'next/router'
import { checkLoggedIn } from 'core/services/utils'

const CompanyInfo = ({ query, authContext }) => {
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
        <CompanyDetail companyId={query.company_id} />
      </div>
    </MainLayout>
  )
}

CompanyInfo.getInitialProps = ({ query }) => ({ query })
export default CompanyInfo
