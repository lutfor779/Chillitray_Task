import { List } from "antd";
import React from "react";

const Aside = () => {
	const searchData = ["UX Design", "Marketing", "Expansion", "Technology"];

	const topics = [
		{ title: "UX Design", description: "Design" },
		{ title: "Technology", description: "All about programming" },
		{ title: "Python", description: "Computer programming" },
		{ title: "Expansion", description: "Topic" },
		{ title: "Technology", description: "Topic" },
		{ title: "Legal", description: "Topic" },
		{ title: "New Hire", description: "Topic" },
	];
	return (
		<aside>
			<div className="shadow-md rounded p-1">
				<List
					size="small"
					header={
						<div className="text-xl font-medium ml-4">
							Recent Searches
						</div>
					}
					footer={
						<div className="ml-5 text-violet-500">Show more</div>
					}
					dataSource={searchData}
					renderItem={(item) => (
						<List.Item>
							<div className="flex items-center w-full text-gray-500 hover:text-violet-500">
								<p>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12.9905 12.1963L15.1876 14.3923C15.2901 14.4984 15.3468 14.6405 15.3455 14.788C15.3442 14.9355 15.285 15.0766 15.1807 15.1809C15.0764 15.2852 14.9354 15.3443 14.7879 15.3456C14.6404 15.3469 14.4983 15.2902 14.3922 15.1877L12.1951 12.9906C10.7593 14.2207 8.90291 14.8469 7.01538 14.7378C5.12786 14.6287 3.35597 13.7928 2.0715 12.4054C0.787034 11.018 0.0898466 9.18709 0.126234 7.29677C0.162621 5.40645 0.929754 3.60369 2.26666 2.26678C3.60357 0.929876 5.40632 0.162743 7.29664 0.126356C9.18696 0.0899687 11.0179 0.787156 12.4053 2.07162C13.7926 3.35609 14.6286 5.12799 14.7377 7.01551C14.8468 8.90303 14.2206 10.7594 12.9905 12.1952V12.1963ZM7.43747 13.6251C9.0785 13.6251 10.6523 12.9732 11.8127 11.8128C12.9731 10.6524 13.625 9.07862 13.625 7.43759C13.625 5.79656 12.9731 4.22275 11.8127 3.06237C10.6523 1.90199 9.0785 1.25009 7.43747 1.25009C5.79644 1.25009 4.22263 1.90199 3.06225 3.06237C1.90186 4.22275 1.24997 5.79656 1.24997 7.43759C1.24997 9.07862 1.90186 10.6524 3.06225 11.8128C4.22263 12.9732 5.79644 13.6251 7.43747 13.6251Z"
											fill="currentcolor"
										/>
									</svg>
								</p>
								<p className="ml-1">{item}</p>
							</div>
						</List.Item>
					)}
				/>
			</div>

			<div className="shadow-md rounded p-1 mt-3">
				<List
					size="small"
					header={
						<div className="text-xl font-medium ml-4">
							Topics to follow
						</div>
					}
					footer={
						<div className="ml-5 text-violet-500">Show more</div>
					}
					dataSource={topics}
					renderItem={(item) => (
						<List.Item>
							<List.Item.Meta
								title={<p>{item.title}</p>}
								description={
									<p className="text-xs">
										{item.description}
									</p>
								}
							/>
							<div className="flex items-center">
								<button className="border border-violet-500 py-1 px-3 rounded-full text-xs text-violet-500">
									Follow
								</button>
								<p className="text-3xl font-light ml-3 -mt-1">
									&#215;
								</p>
							</div>
						</List.Item>
					)}
				/>
			</div>
		</aside>
	);
};

export default Aside;
