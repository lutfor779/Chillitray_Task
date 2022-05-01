import { Col, Row } from "antd";
import React from "react";

const Content = () => {
	const arr = [1, 2, 3, 4, 5, 6, 7];

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
				{arr.map((i) => (
					<div className="p-5 shadow-md mb-5" key={i}>
						<Row gutter={[32, 24]} align="middle">
							<Col xs={24} md={18} xxl={20}>
								<p className="text-xs font-semibold text-gray-500">
									Hot Scoops
								</p>
								<h4 className="text-xl font-semibold text-gray-700">
									Samsung Galaxy F22 launched in India: Price,
									features, other details
								</h4>
								<p className="text-gray-500 mb-3">
									Samsung Galaxy F22 has been launched in
									India. The new smartphone has been priced in
									the mid-range segment. The new smartphone is
									powered by a MediaTek chipset and features a
									high refresh rate AMOLED display.
								</p>

								<div className="flex justify-between text-indigo-500">
									<div className="flex justify-between">
										<div className="flex space-around items-center">
											<p>
												<svg
													width="18"
													height="17"
													viewBox="0 0 18 17"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M15.6666 5.66602H10.99L11.9258 2.86018C12.0941 2.35352 12.0091 1.79185 11.6966 1.35852C11.3841 0.925182 10.8775 0.666016 10.3433 0.666016H8.99996C8.75246 0.666016 8.51829 0.776016 8.35913 0.966016L4.44246 5.66602H2.33329C1.41413 5.66602 0.666626 6.41352 0.666626 7.33268V14.8327C0.666626 15.7518 1.41413 16.4993 2.33329 16.4993H13.4225C13.7615 16.4982 14.0923 16.3942 14.371 16.2011C14.6497 16.0079 14.8632 15.7348 14.9833 15.4177L17.2808 9.29185C17.3157 9.19828 17.3335 9.09921 17.3333 8.99935V7.33268C17.3333 6.41352 16.5858 5.66602 15.6666 5.66602ZM2.33329 7.33268H3.99996V14.8327H2.33329V7.33268ZM15.6666 8.84852L13.4225 14.8327H5.66663V6.80102L9.38996 2.33268H10.345L9.04329 6.23518C9.00104 6.36044 8.98925 6.49398 9.00891 6.6247C9.02857 6.75543 9.07911 6.87959 9.15635 6.98688C9.23358 7.09418 9.33527 7.18151 9.453 7.24165C9.57073 7.30179 9.7011 7.33299 9.83329 7.33268H15.6666V8.84852Z"
														fill="currentColor"
													/>
												</svg>
											</p>
											<p className="mx-2">Relevant</p>
										</div>

										<div className="flex space-around items-center mx-8">
											<p>
												<svg
													width="17"
													height="16"
													viewBox="0 0 17 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M2.7196 8V13.3333C2.7196 13.687 2.86287 14.0261 3.11788 14.2761C3.37289 14.5262 3.71875 14.6667 4.07939 14.6667H12.2381C12.5988 14.6667 12.9446 14.5262 13.1996 14.2761C13.4546 14.0261 13.5979 13.687 13.5979 13.3333V8"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
													<path
														d="M10.8784 4.00065L8.15879 1.33398L5.43921 4.00065"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
													<path
														d="M8.15869 1.33398V10.0007"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</p>
											<p className="mx-2">Share</p>
										</div>

										<div className="hidden md:block">
											<div className=" flex space-around items-center">
												<p>
													<svg
														width="17"
														height="16"
														viewBox="0 0 17 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<g clipPath="url(#clip0_1604_8432)">
															<path
																d="M3.19609 2H14.0744C14.435 2 14.7809 2.14048 15.0359 2.39052C15.2909 2.64057 15.4342 2.97971 15.4342 3.33333V7.33333C15.4342 9.10144 14.7179 10.7971 13.4428 12.0474C12.1678 13.2976 10.4384 14 8.63525 14C7.7424 14 6.85829 13.8276 6.0334 13.4925C5.20852 13.1575 4.45901 12.6664 3.82767 12.0474C2.55262 10.7971 1.8363 9.10144 1.8363 7.33333V3.33333C1.8363 2.97971 1.97957 2.64057 2.23458 2.39052C2.48959 2.14048 2.83545 2 3.19609 2V2Z"
																stroke="currentColor"
																strokeWidth="2"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
															<path
																d="M5.91577 6.66602L8.63535 9.33268L11.3549 6.66602"
																stroke="currentColor"
																strokeWidth="2"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</g>
														<defs>
															<clipPath id="clip0_1604_8432">
																<rect
																	width="16.3175"
																	height="16"
																	fill="white"
																	transform="translate(0.476562)"
																/>
															</clipPath>
														</defs>
													</svg>
												</p>
												<p className="mx-2">
													Read Later
												</p>
											</div>
										</div>
									</div>

									<div className="hidden md:block">
										<div className="flex">
											<p>[Source]</p>
											<p className="text-gray-400 ml-5">
												15 mins ago
											</p>
										</div>
									</div>
								</div>
							</Col>
							<Col xs={24} md={6} xxl={4}>
								<img src="/images/phone.png" alt="phone" />
							</Col>
						</Row>
					</div>
				))}
			</main>
		</section>
	);
};

export default Content;
