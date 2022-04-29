import { Layout } from "antd";
import React from "react";
import Header from "../Shared/Header";

const { Content } = Layout;

const HomeLayout = (props) => {
	return (
		<Layout>
			<Header />
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
	);
};

export default HomeLayout;
