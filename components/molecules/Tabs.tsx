import React from "react";
import { Tab } from "@headlessui/react";
interface Props {
	categories: Category[];
	showProducts: (id: number) => JSX.Element[];
}
function Tabs({ categories, showProducts }: Props) {
	return (
		<>
			<Tab.Group>
				<Tab.List className="flex items-center justify-center">
					{categories?.map((category) => (
						<Tab
							className={({ selected }) =>
								`whitespace-nowrap rounded-t-lg px-5 py-3 text-sm outline-none md:py-4 md:px-6 md:text-base ${
									selected
										? "borderGradient"
										: "border-b-2 border-[#35383C] text-[#747474]"
								}`
							}
							key={category._id}
						>
							{category.title}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-12 flex flex-col items-center md:mt-16 ">
					<Tab.Panel className="tabPanel  ">{showProducts(0)}</Tab.Panel>
					<Tab.Panel className=" tabPanel">{showProducts(1)}</Tab.Panel>
					<Tab.Panel className=" tabPanel">{showProducts(2)}</Tab.Panel>
					<Tab.Panel className=" tabPanel">{showProducts(3)}</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</>
	);
}

export default Tabs;
