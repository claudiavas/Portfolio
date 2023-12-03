import { IconButton, Tooltip } from '@mui/material'
import { GitHubIcon, LinkedInIcon } from '@mui/icons-material'
import React from 'react'

export const SocialIcons = ({theme}) => {

    return (
        <>
            <Tooltip title="GitHub">
                <IconButton
                    href="URL_DE_GITHUB"
                    target="_blank"
                    sx={{
                        color: theme.palette.text.primary,
                        display: 'block', textTransform: 'none',
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                            color: theme.palette.primary.main,
                            transform: 'scale(1.2)',
                            backgroundColor: 'transparent'
                        }
                    }}
                >
                    <GitHubIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
                <IconButton
                    href="URL_DE_LINKEDIN"
                    target="_blank"
                    sx={{
                        color: theme.palette.text.primary,
                        display: 'block', textTransform: 'none',
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                            color: theme.palette.secondary.main,
                            transform: 'scale(1.2)',
                            backgroundColor: 'transparent'
                        }
                    }}
                >
                    <LinkedInIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}
