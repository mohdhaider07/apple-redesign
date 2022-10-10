import React from "react";
import { Tab } from "@headlessui/react";
interface Props {
	categories: Category[];
}
function Tabs({ categories }: Props) {
	return (
		<>
			<Tab.Group>
				<Tab.List className="flex items-center justify-center">
					{categories?.map((category) => (
						<Tab
							className={({ selected }) =>
								`rounded-t-lg px-5 py-3 text-sm outline-none md:py-4 md:px-6 md:text-base ${
									selected
										? "borderGradient bg-[#35383C] text-white"
										: "border-b-2 border-[#35383C] text-[#747474]"
								}`
							}
							key={category._id}
						>
							{category.title}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="flex flex-col items-center ">
					<Tab.Panel>content 1</Tab.Panel>
					<Tab.Panel>content 2</Tab.Panel>
					<Tab.Panel>content 3</Tab.Panel>
					<Tab.Panel>content 4</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</>
	);
}

export default Tabs;
