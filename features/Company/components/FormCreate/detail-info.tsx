import { FormControl, TextField } from '@material-ui/core'
import React from 'react'
import { Controller } from 'react-hook-form'

const DetailInfoForm = (props) => {
  const { errors, control } = props

  return (
    <div className="flex flex-col px-6 pb-6">
      <p className="mb-4 font-semibold font-prompt text-heading-6">รายละเอียดบริษัท</p>
      <FormControl error={!!errors?.description} className="w-full font-prompt bg-grey-100">
        <Controller
          control={control}
          name="description"
          as={
            <TextField
              label="รายละเอียด *"
              name="description"
              className="border-opacity-50 place-content-start bg-grey-100 border-DEFAULT"
              variant="outlined"
              defaultValue=""
              error={!!errors.description}
              helperText={errors.description?.message}
              rows={5}
              multiline
              fullWidth
            />
          }
        />
      </FormControl>
    </div>
  )
}

export default DetailInfoForm