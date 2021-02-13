import React, { useEffect } from 'react'

import { CardSmall } from '../../../core/components/Card/Small'
import dayjs from 'dayjs'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export const AnnouncementCard = (props) => {
  const { announcements } = props

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [announcements])

  return (
    <>
      {announcements.length !== 0 && (
        <div className="flex flex-col">
          <p className="font-prompt-semibold text-body-1">ประกาศรับสมัครงาน</p>
          <div className="mt-4">
            {announcements.map((data, i) => {
              return (
                <div style={{ width: '403px' }} key={i}>
                  <CardSmall
                    company={`${data.company_name_en} - ${data.company_name_th}`}
                    title={data.announcement_title}
                    date={`${dayjs(data.start_date)
                      .locale('th')
                      .add(543, 'year')
                      .format('DD MMMM YYYY')} - ${dayjs(data.end_date)
                      .locale('th')
                      .add(543, 'year')
                      .format('DD MMMM YYYY')}`}
                    tags={[`${data.job_position}`, `${data.job_type}`]}
                    srcImg={`${publicRuntimeConfig.s3_url}/logo/${data.logo}`}
                  />
                </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}