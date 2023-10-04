import React from 'react'
import {CircularProgress, Backdrop as MuiBackdrop} from '@mui/material'

const Backdrop = ({open = false}: {open?: boolean}) => {
  return (
      <MuiBackdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
      >
        <CircularProgress color="inherit" />
      </MuiBackdrop>
  )
}

export default Backdrop
