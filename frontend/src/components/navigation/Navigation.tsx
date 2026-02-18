import { Button, Drawer, Grid, Layout, Menu } from "antd";

import logo from "../../assets/aaaaaaaaaaaaaaaaa.webp";
import "./navigation.scss";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

const items = [
  {
    key: 1,
    label: "Trang chủ",
  },
  {
    key: 2,
    label: "About",
  },
  {
    key: 3,
    label: "Khoá học",
  },
  {
    key: 4,
    label: "Giảng viên",
  },
  {
    key: 5,
    label: "Tuyển dụng",
  },
];
const { useBreakpoint } = Grid;

function Navigation() {
  const screens = useBreakpoint();
  const isDesktop = screens.lg;
  const [open, setOpen] = useState(false);

  return (
    <Header className="jip-header">
      {isDesktop ? (
        <>
          <img width={80} alt="logo" src={logo} />
          <Menu
            className="jip-nav"
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items}
          />
          <Button type="primary" className="jip-button btn-enroll">
            <span className="main-label">Đăng nhập</span>
            <div className="divider">
              <span className="diamond"></span>
            </div>
          </Button>
        </>
      ) : (
        <>
          <img width={80} alt="logo" src={logo} />
          <Button type="text" onClick={() => setOpen(true)}>
            <MenuOutlined />
          </Button>
          <Drawer
            title="MENU"
            rootClassName="drawer-menu"
            placement="right"
            open={open}
            onClose={() => setOpen(false)}
          >
            <Menu mode="inline" items={items} defaultSelectedKeys={["1"]} />
            <Button type="primary" className="btn-metalic">
              Liên hệ tư vấn
            </Button>
          </Drawer>
        </>
      )}
    </Header>
  );
}

export default Navigation;
