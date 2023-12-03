import { IconButton, Tooltip } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const EmailButton = ({email}) => {
  return (
    <Tooltip title={"Enviar email"} arrow>
    <IconButton
      component="a"
      href={`mailto:${email}`}
      size="small"
      style={{ marginBottom: '5px' }}
      color="primary"
    >
      <MailOutlineIcon style={{ color: '#4B78F7' }} fontSize="large" />
    </IconButton>
  </Tooltip>
  )
}
