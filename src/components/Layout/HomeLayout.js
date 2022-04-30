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
				<div className="w-64 xl:w-80 hidden lg:block">
					<Sider
						width={243}
						style={{
							backgroundColor: "white",
							marginTop: "1.5rem",
						}}
					>
						<Menu />
					</Sider>
				</div>

				<Layout className="bg-white">
					<Content
						style={{
							overflow: "initial",
							minHeight: "90vh",
							background: "white",
							margin: "1.5rem 2rem",
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
