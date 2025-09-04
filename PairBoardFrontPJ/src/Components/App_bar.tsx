import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

// 페이지 목록과 사용자 설정 메뉴 목록을 배열로 정의합니다.
const pages = ['공지사항', '만화', '게임', '자동차', '스포츠', '영화'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  // 모바일 메뉴(햄버거 메뉴)의 앵커 엘리먼트 상태를 관리합니다.
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  // 사용자 설정 메뉴의 앵커 엘리먼트 상태를 관리합니다.
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  // 모바일 메뉴를 여는 함수입니다. 이벤트가 발생한 엘리먼트를 앵커로 설정합니다.
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  // 사용자 설정 메뉴를 여는 함수입니다.
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  // 모바일 메뉴를 닫는 함수입니다. 앵커 엘리먼트를 null로 설정합니다.
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // 사용자 설정 메뉴를 닫는 함수입니다.
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    // 상단바 컴포넌트입니다.
    <AppBar position="static">
      <Container maxWidth="xl">
        {/* 툴바 컴포넌트입니다. 툴바는 상단바 내의 콘텐츠를 감싸는 역할을 합니다. */}
        <Toolbar disableGutters>
          {/* 창이 커졌을 때(md 이상) 보이는 로고(안드로이드 아이콘)와 타이포그래피입니다. */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            캣드립
          </Typography>

          {/* 창이 작아졌을 때(모바일) 보이는 햄버거 메뉴 아이콘과 드롭다운 메뉴입니다. */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {/* pages 배열을 순회하며 메뉴 아이템들을 렌더링합니다. */}
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* 창이 작아졌을 때 보이는 로고(안드로이드 아이콘)와 타이포그래피입니다. */}
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            캣드립
          </Typography>

          {/* 창이 커졌을 때(md 이상) 보이는 페이지 버튼들입니다. */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* 사용자 설정 메뉴와 아바타입니다. */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* settings 배열을 순회하며 메뉴 아이템들을 렌더링합니다. */}
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
