import { Col, Row } from "antd";
import React from "react";
import fakeData from "../../fakeDB.json";

const Content = () => {
	return (
		<section>
			<header>
				<h1 className="text-xl font-bold">Top stories for you</h1>
				<div className="my-5 flex justify-between items-center">
					<div>
						<button className="bg-yellow-300 text-xs py-1 px-3 rounded-full shadow-md">
							All
						</button>
						<button className="bg-white hover:bg-yellow-300 text-xs py-1 px-3 rounded-full shadow-md mx-3 hidden md:inline-block">
							Finance
						</button>
						<button className="bg-white hover:bg-yellow-300 text-xs py-1 px-3 rounded-full shadow-md hidden md:inline-block">
							Business
						</button>
						<button className="bg-white hover:bg-yellow-300 text-xs py-1 px-3 rounded-full shadow-md mx-3 hidden md:inline-block">
							Oppourtunity
						</button>
						<button className="bg-white hover:bg-yellow-300 text-xs py-1 px-3 rounded-full shadow-md hidden md:inline-block">
							Personal
						</button>
						<button className="bg-white hover:bg-yellow-300 text-xs py-1 px-3 rounded-full shadow-md mx-3 hidden md:inline-block">
							Company
						</button>
					</div>
					<div>
						<p className="text-current hover:text-yellow-700">
							<svg
								width="16"
								height="4"
								viewBox="0 0 16 4"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z"
									fill="currentColor"
								/>
							</svg>
						</p>
					</div>
				</div>
			</header>

			<main>
				{fakeData.map((item, index) => (
					<div className="p-5 shadow-md mb-5" key={index}>
						<Row gutter={[32, 24]} align="middle">
							<Col xs={24} md={18} xxl={20}>
								<p className="text-xs font-semibold text-gray-500">
									{item.head}
								</p>
								<h4 className="text-xl font-semibold text-gray-700">
									{item.Title}
								</h4>
								<p className="text-gray-500 mb-3">
									{item.detail}
								</p>

								<div className="flex justify-between text-indigo-500">
									<div className="flex justify-between">
										{item.footer.map((data, i) => (
											<div
												className="flex space-around items-center ml-3"
												key={i}
											>
												<img
													src={data.icon}
													alt={data.name}
												/>
												<p className="mx-1">
													{data.name}
												</p>
											</div>
										))}
									</div>

									<div className="hidden md:block">
										<div className="flex">
											<p>[{item.extra[0]}]</p>
											<p className="text-gray-400 ml-5">
												{item.extra[1]}
											</p>
										</div>
									</div>
								</div>
							</Col>
							<Col xs={24} md={6} xxl={4}>
								<img src={item.image} alt="phone" />
							</Col>
						</Row>
					</div>
				))}
			</main>
		</section>
	);
};

export default Content;
