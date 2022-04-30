import React from "react";
import { ReactComponent as Analytic } from "./icons/analytic.svg";
import { ReactComponent as Awards } from "./icons/award.svg";
import { ReactComponent as Budget } from "./icons/budget.svg";
import { ReactComponent as Communication } from "./icons/communication.svg";
import { ReactComponent as Earnings } from "./icons/earnings.svg";
import { ReactComponent as Expansion } from "./icons/expansion.svg";
import { ReactComponent as Hire } from "./icons/hire.svg";
import { ReactComponent as Hot } from "./icons/hot.svg";
import { ReactComponent as Infrastecture } from "./icons/infrastecture.svg";
import { ReactComponent as Legal } from "./icons/legal.svg";
import { ReactComponent as Marketing } from "./icons/marketing.svg";
import { ReactComponent as Position } from "./icons/position.svg";
import { ReactComponent as Tech } from "./icons/technology.svg";

const Menu = () => {
	return (
		<div>
			<div>
				<ul>
					<li>
						<a
							className="flex items-center text-sm py-4 pl-8 h-12 text-gray-700  hover:text-violet-600 hover:bg-violet-50 font-normal focus:font-bold focus:text-violet-600 focus:bg-violet-50 active:font-bold active:text-violet-600 active:bg-violet-50 transition duration-300 ease-in-out rounded-r-full relative"
							href="#!"
						>
							<Hot className="mr-4" />
							<span>Hot Scoops</span>
							<span className="absolute -top-1 left-3 text-3xl ">
								.
							</span>
						</a>
					</li>

					<li>
						<a
							className="flex items-center text-sm py-4 pl-8 h-12 text-gray-700  hover:text-violet-600 hover:bg-violet-50 font-normal focus:font-bold focus:text-violet-600 focus:bg-violet-50 active:font-bold active:text-violet-600 active:bg-violet-50 transition duration-300 ease-in-out rounded-r-full"
							href="#!"
						>
							<Earnings className="mr-4" />
							<span>Earnings</span>
						</a>
					</li>

					<li>
						<a
							className="flex items-center text-sm py-4 pl-8 h-12 text-gray-700  hover:text-violet-600 hover:bg-violet-50 font-normal focus:font-bold focus:text-violet-600 focus:bg-violet-50 active:font-bold active:text-violet-600 active:bg-violet-50 transition duration-300 ease-in-out rounded-r-full"
							href="#!"
						>
							<Awards className="mr-4" />
							<span>Awards</span>
						</a>
					</li>

					<li>
						<a
							className="flex items-center text-sm py-4 pl-8 h-12 text-gray-700  hover:text-violet-600 hover:bg-violet-50 font-normal focus:font-bold focus:text-violet-600 focus:bg-violet-50 active:font-bold active:text-violet-600 active:bg-violet-50 transition duration-300 ease-in-out rounded-r-full"
							href="#!"
						>
							<Expansion className="mr-4" />
							<span>Expansion</span>
						</a>
					</li>

					<li>
						<a
							className="flex items-center text-sm py-4 pl-8 h-12 text-gray-700  hover:text-violet-600 hover:bg-violet-50 font-normal focus:font-bold focus:text-violet-600 focus:bg-violet-50 active:font-bold active:text-violet-600 active:bg-violet-50 transition duration-300 ease-in-out rounded-r-full"
							href="#!"
						>
							<Position className="mr-4" />
							<span>Open Position</span>
						</a>
					</li>

					<li>
						<a
							className="flex items-center text-sm py-4 pl-8 h-12 text-gray-700  hover:text-violet-600 hover:bg-violet-50 font-normal focus:font-bold focus:text-violet-600 focus:bg-violet-50 active:font-bold active:text-violet-600 active:bg-violet-50 transition duration-300 ease-in-out rounded-r-full"
							href="#!"
						>
							<Hire className="mr-4" />
							<span>New Hire</span>
						</a>
					</li>
				</ul>

				<hr className="my-3 border border-gray-300" />

				<ul>
					<li>
						<a
							className="flex items-center text-sm py-4 pl-8 h-12 text-gray-700  hover:text-violet-600 hover:bg-violet-50 font-normal focus:font-bold focus:text-violet-600 focus:bg-violet-50 active:font-bold active:text-violet-600 active:bg-violet-50 transition duration-300 ease-in-out rounded-r-full"
							href="#!"
						>
							<Analytic className="mr-4" />
							<span>Analytics & Reporting</span>
						</a>
					</li>

					<li>
						<a
							className="flex items-center text-sm py-4 pl-8 h-12 text-gray-700  hover:text-violet-600 hover:bg-violet-50 font-normal focus:font-bold focus:text-violet-600 focus:bg-violet-50 active:font-bold active:text-violet-600 active:bg-violet-50 transition duration-300 ease-in-out rounded-r-full"
							href="#!"
						>
							<Budget className="mr-4" />
							<span>Budgeting & Planning</span>
						</a>
					</li>

					<li>
						<a
							className="flex items-center text-sm py-4 pl-8 h-12 text-gray-700  hover:text-violet-600 hover:bg-violet-50 font-normal focus:font-bold focus:text-violet-600 focus:bg-violet-50 active:font-bold active:text-violet-600 active:bg-violet-50 transition duration-300 ease-in-out rounded-r-full"
							href="#!"
						>
							<Communication className="mr-4" />
							<span>Communication</span>
						</a>
					</li>

					<li>
						<a
							className="flex items-center text-sm py-4 pl-8 h-12 text-gray-700  hover:text-violet-600 hover:bg-violet-50 font-normal focus:font-bold focus:text-violet-600 focus:bg-violet-50 active:font-bold active:text-violet-600 active:bg-violet-50 transition duration-300 ease-in-out rounded-r-full"
							href="#!"
						>
							<Tech className="mr-4" />
							<span>Technology</span>
						</a>
					</li>

					<li>
						<a
							className="flex items-center text-sm py-4 pl-8 h-12 text-gray-700  hover:text-violet-600 hover:bg-violet-50 font-normal focus:font-bold focus:text-violet-600 focus:bg-violet-50 active:font-bold active:text-violet-600 active:bg-violet-50 transition duration-300 ease-in-out rounded-r-full"
							href="#!"
						>
							<Legal className="mr-4" />
							<span>Legal</span>
						</a>
					</li>

					<li>
						<a
							className="flex items-center text-sm py-4 pl-8 h-12 text-gray-700  hover:text-violet-600 hover:bg-violet-50 font-normal focus:font-bold focus:text-violet-600 focus:bg-violet-50 active:font-bold active:text-violet-600 active:bg-violet-50 transition duration-300 ease-in-out rounded-r-full"
							href="#!"
						>
							<Infrastecture className="mr-4" />
							<span>Infrastecture</span>
						</a>
					</li>

					<li>
						<a
							className="flex items-center text-sm py-4 pl-8 h-12 text-gray-700  hover:text-violet-600 hover:bg-violet-50 font-normal focus:font-bold focus:text-violet-600 focus:bg-violet-50 active:font-bold active:text-violet-600 active:bg-violet-50 transition duration-300 ease-in-out rounded-r-full"
							href="#!"
						>
							<Marketing className="mr-4" />
							<span>Marketing</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Menu;
