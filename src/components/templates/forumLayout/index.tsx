import { Header } from "@/components/molecules/Header";
import {
  MenuItemsProps,
  SideOptions,
} from "@/components/molecules/SideOptions";
import { Layout } from "antd";
import React from "react";
import { HiHome } from "react-icons/hi";
import { MdExplore } from "react-icons/md";
import { FaComments } from "react-icons/fa";

const { Content } = Layout

interface Props {
  children: React.ReactNode;
}

export const ForumLayout = ({ children }: Props) => {
  const items: MenuItemsProps[] = [
    {
      label: "INICIO",
      icon: HiHome,
      key: "forum",
      path: `/forum`,
      show: true,
    },
    {
      label: "TÓPICOS",
      icon: FaComments,
      key: "topics",
      path: `/topics`,
      show: true,
    },
    {
      label: "EXPLORAR",
      icon: MdExplore,
      key: "explore",
      path: `/explore`,
      show: true,
    },
  ];

  return (
    <Layout>

      {/* desk */}
      <div className="w-screen bg-background hidden md:flex flex-col items-center">
        <Header isMobile={false}  />
        <SideOptions items={items}>{children}</SideOptions>
      </div>

      {/* mobile */}
      <div className="w-screen bg-background flex flex-col md:hidden items-center">
        <Header isMobile={true}/>
        <Layout>
          <Content
            className={`min-h-screen relative flex md:hidden justify-center items-center flex-col`}
            style={{
              backgroundColor: "#D6D6D6",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
            }}
          >
            {children}
          </Content>
        </Layout>
      </div>
    </Layout>
  );
};
