import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../../Common/Logo";
import { sidebarLink } from "../../../RouteLinks";
import { paths } from "../../../Constant";
import { Logout } from "../../../Shared/Icons";
import {
  AppSideBar,
  AppSidebarInside,
  AppSidebarLinkCover,
  SidebarItem,
  SidebarTitle,
  SidebarList,
  SidebarListItem,
  SidebarLinkStyled,
  AppUserLoggedIn,
} from "./style";

const normalizePath = (path) =>
  path?.startsWith("/") ? path : `/apps/${path}`;
const isDashboardPath = (path) =>
  path === "/apps" || path === "apps" || path === "/apps/";
const isLinkActive = (currentPath, linkPath) =>
  currentPath === linkPath || currentPath.startsWith(linkPath + "/");

export const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <AppSideBar>
      <AppSidebarInside>
        <Logo />
        <AppSidebarLinkCover>
          {sidebarLink.map((item) => {
            const sectionIsActive = item.children?.some(({ path }) => {
              if (!path) return false;

              const normalizedPath = normalizePath(path);
              return isDashboardPath(normalizedPath)
                ? pathname === "/apps"
                : isLinkActive(pathname, normalizedPath);
            });

            return (
              <SidebarItem key={item.id} $expanded={sectionIsActive}>
                <SidebarTitle>{item.title}</SidebarTitle>
                <SidebarList>
                  {item.children?.map(({ id, path, title, icon: Icon }) => {
                    if (!path) return null;

                    const linkPath = normalizePath(path);
                    const active = isDashboardPath(linkPath)
                      ? pathname === "/apps"
                      : isLinkActive(pathname, linkPath);

                    return (
                      <SidebarListItem key={id} $active={active}>
                        <SidebarLinkStyled to={linkPath}>
                          {Icon && <Icon />} <p>{title}</p>
                        </SidebarLinkStyled>
                      </SidebarListItem>
                    );
                  })}
                </SidebarList>
              </SidebarItem>
            );
          })}
        </AppSidebarLinkCover>
        <AppUserLoggedIn>
          <div className="app_profile_logged_user">
            <div className="app_avt_wrapper">
              <span>
                <img src="/4.png" alt="profile" />
              </span>
              <div className="app_avatar_info">
                <h6>Admin</h6>
                <span>Role: Admin</span>
              </div>
            </div>
            <div className="app_logout" onClick={() => navigate(paths.LOGIN)}>
              <Logout />
            </div>
          </div>
        </AppUserLoggedIn>
      </AppSidebarInside>
    </AppSideBar>
  );
};
