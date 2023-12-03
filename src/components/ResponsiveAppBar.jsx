import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Container, Button, Menu, MenuItem, Typography} from '@mui/material';
import { useTheme } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { ToggleColorButton } from './ToggleColorButton';
import { CustomTheme } from '../styles/theme';
import { SocialIcons } from './SocialIcons';

export const pages = ['Home', 'About Me', 'Tech Stack', 'Projects', 'Contact'];

export default function ResponsiveAppBar() {

  const theme = useTheme(CustomTheme);

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ position: "fixed", zindex: '999', top: '0', right: '0', left: '0', backgroundColor: '#fff', boxShadow: 'none', marginBottom: '0rem' }}>
      <Container maxWidth="xl" sx={{ display: {xs: 'flex',  md: 'flex', justifyContent: "flex-end"} }}>
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: 'flex', justifyContent: "flex-end", md: 'none' }
            }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: theme.palette.text.primary, '&:hover': { color: theme.palette.primary.main }}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              PaperProps={{
                style: {
                  boxShadow: 'none',
                  border: 'none'
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: theme.palette.text.primary,
                    display: 'block', textTransform: 'none',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      color: theme.palette.primary.main,
                      transform: 'scale(1.2)',
                      backgroundColor: 'transparent',
                    },
                  }}>
                  <Typography textAlign="center"
                    sx={{
                      color: theme.palette.text.primary,
                      '&:hover': {
                        color: theme.palette.primary.main
                      }
                    }}
                  >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' },
              gap: "0.8rem",
              justifyContent: "flex-end",
            }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 0,
                  py: 0,
                  color: theme.palette.text.primary,
                  display: 'block', textTransform: 'none',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    transform: 'scale(1.2)',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {page}
              </Button>              
            ))}
            <Box sx={{
              display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' },
              gap: "0.8rem",
              ml: 4
            }}>
              <SocialIcons/>
            </Box>

            <Box sx={{
              display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' },
              gap: "0.8rem",
              ml: 4
            }}>
              <ToggleColorButton/>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}