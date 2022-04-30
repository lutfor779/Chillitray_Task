import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import React, { useState } from "react";
import Menu from "../Menu";

const Header = () => {
	const [visible, setVisible] = useState(false);

	return (
		<div className="bg-white drop-shadow-lg p-5">
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<div>
						<img src="/images/logo/full.svg" alt="logo" />
					</div>

					{/* menu */}
					<div className="hidden md:block">
						<div className="flex text-gray-600 justify-around w-96">
							<p>Feed</p>
							<p>Dashboard</p>
							<p>Lookup</p>
							<p>List</p>
							<p>Team</p>
						</div>
					</div>
				</div>

				<div className="hidden sm:block">
					<div className="flex items-center">
						{/* search */}
						<div className="hidden xl:block">
							<div className="relative w-full">
								<input
									type="text"
									className="border border-gray-400 rounded-full p-2"
									placeholder="Search any keyword"
								/>

								{/* icon */}
								<div className="absolute inset-y-0 right-0 flex items-center px-1 pointer-events-none">
									<div className="bg-white w-8 h-8 rounded-full shadow-lg flex items-center justify-center">
										<img
											src="/images/icons/search.svg"
											alt=""
										/>
									</div>
								</div>
							</div>
						</div>

						{/* credits */}
						<div className="mx-3 hidden lg:block">
							<div className="flex items-center">
								<img
									src="/images/icons/credits.svg"
									alt="credit"
								/>
								<p className="text-xs ml-1">Credits</p>
							</div>
							<div className="mt-1">
								<div className="w-28 bg-gray-200 h-2 rounded-full">
									<div className="bg-yellow-400 h-2 w-3/4 rounded-full"></div>
								</div>
							</div>
						</div>

						{/* bell icon */}
						<div className="relative mr-3">
							<img src="/images/icons/bell.svg" alt="bell" />
							<span className="absolute top-1 right-1 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
						</div>

						{/* select */}
						<div className="hidden lg:block">
							<div className="flex justify-center">
								<div className="mb-1 relative">
									<select
										className="form-select appearance-none block px-2 font-semibold m-0 focus:outline-none w-32 bg-white"
										defaultValue="0"
									>
										<option value="0">
											Bansilal Brata
										</option>
										<option value="1">
											Bansilal Brata
										</option>
										<option value="2">
											Bansilal Brata
										</option>
										<option value="3">
											Bansilal Brata
										</option>
									</select>

									<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
										<img
											src="/images/icons/down.svg"
											alt=""
										/>
									</div>
								</div>
							</div>
						</div>

						{/* profile */}
						<div className="w-12 h-12 bg-violet-300 rounded-lg flex justify-center mx-3">
							<img
								src="https://joeschmoe.io/api/v1/random"
								alt=""
								className="pt-2"
							/>
						</div>

						{/* button */}
						<div>
							<button className="bg-yellow-400 p-3 font-semibold text-xs rounded-xl">
								Upgrade
							</button>
						</div>
					</div>
				</div>

				{/* Menu Icon */}
				<div className="sm:hidden block">
					<MenuOutlined
						className="text-xl mb-2 text-black hover:text-indigo-500"
						onClick={() => setVisible(!visible)}
					/>

					<Drawer
						title={
							<div className="flex items-center justify-between">
								<img src="/images/logo/full.svg" alt="logo" />
								<div className="w-8 h-8 bg-violet-300 rounded-lg flex justify-center mb-1">
									<img
										src="https://joeschmoe.io/api/v1/random"
										alt=""
										className="pt-2 "
									/>
								</div>
							</div>
						}
						placement="left"
						closable={false}
						onClose={() => setVisible(!visible)}
						visible={visible}
						width={280}
					>
						<Menu />
					</Drawer>
				</div>
			</div>
		</div>
	);
};

export default Header;
