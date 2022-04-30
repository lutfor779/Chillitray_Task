import { Layout } from "antd";
import React from "react";
import Header from "../Shared/Header";
import Menu from "../Shared/Menu";

const { Content, Sider } = Layout;

const HomeLayout = (props) => {
	return (
		<Layout>
			<Header />
			<Layout className="bg-white">
				<Sider
					width={243}
					style={{ backgroundColor: "white", marginTop: "1rem" }}
				>
					<Menu />
				</Sider>
				<Layout>
					<Content
						style={{
							overflow: "initial",
							minHeight: "90vh",
							background: "white",
						}}
					>
						{props.children}
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
};

export default HomeLayout;
