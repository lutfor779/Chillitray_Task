import { Col, Row } from "antd";
import React from "react";
import Content from "../../components/Content";
import Aside from "../../components/Content/Aside";
import HomeLayout from "../../components/Layout/HomeLayout";

const Home = () => {
	return (
		<HomeLayout>
			<Row gutter={24}>
				<Col xs={24} xl={16} xxl={18}>
					<Content />
				</Col>
				<Col xs={0} xl={8} xxl={6}>
					<Aside />
				</Col>
			</Row>
		</HomeLayout>
	);
};

export default Home;
