import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className="navbar">
			<div className="container mx-auto">
				<div className="navbar-start flex">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li className="uppercase">
								<NavLink to={"subjects"}>Subjects</NavLink>
							</li>
							<li>
								<NavLink to={"statistics"}>Statistics</NavLink>
							</li>
							<li>
								<NavLink to={"blog"}>Blog</NavLink>
							</li>
						</ul>
					</div>
					<div className="btn btn-ghost normal-case text-xl">
						<Link to={"/"}>
							<div className="flex gap-4 items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0"
									y="0"
									enableBackground="new 0 0 512.001 512.001"
									version="1.1"
									viewBox="0 0 512.001 512.001"
									xmlSpace="preserve"
									className="w-10 h-10 fill-primary"
								>
									<path d="M216.373 170.778h-9.632c-18.49 0-33.534-15.044-33.534-33.536a8.78 8.78 0 00-17.56 0c0 12.827 4.761 24.555 12.595 33.536H89.424a8.78 8.78 0 000 17.56h50.205c18.492 0 33.536 15.044 33.536 33.536v16.121a8.78 8.78 0 0017.56 0v-16.121c0-12.826-4.761-24.555-12.595-33.536h38.242a8.78 8.78 0 008.78-8.78 8.779 8.779 0 00-8.779-8.78zM422.576 170.778h-78.817c7.834-8.981 12.595-20.71 12.595-33.536a8.78 8.78 0 00-17.56 0c0 18.492-15.044 33.536-33.536 33.536h-9.632a8.78 8.78 0 000 17.56h38.242c-7.834 8.981-12.595 20.71-12.595 33.536v16.121a8.78 8.78 0 0017.56 0v-16.121c0-18.492 15.044-33.536 33.536-33.536h50.205a8.78 8.78 0 008.78-8.78 8.778 8.778 0 00-8.778-8.78z"></path>
									<path d="M426.63 116.891c-4.073-32.067-31.526-56.943-64.681-56.943h-32.471c-3.146-15.426-11.091-29.51-22.854-40.282C292.772 6.984 274.793 0 256 0s-36.772 6.984-50.623 19.667c-11.763 10.771-19.709 24.856-22.854 40.282h-32.471c-33.155 0-60.609 24.876-64.681 56.943-32.067 4.073-56.943 31.526-56.943 64.681 0 35.952 29.249 65.202 65.202 65.202h12.057c11.094 33.025 41.993 55.533 77.401 55.533 5.644 0 11.198-.569 16.595-1.649l38.913 133.917a8.78 8.78 0 0014.639 3.759l23.001-23.001 32.771 90.867a8.779 8.779 0 0017.039-2.978v-181.14a8.778 8.778 0 00-13.401-7.466l-11.478 7.102 2.025-23.425a84.716 84.716 0 0025.72 4.015c35.408 0 66.307-22.508 77.401-55.533h12.057c35.952 0 65.202-29.249 65.202-65.202.001-33.156-24.875-60.61-56.942-64.683zM308.486 337.84v115.153l-20.422-56.627a8.78 8.78 0 00-14.468-3.229l-22.281 22.281-34.86-119.969c16.54-7.06 30.552-19.167 39.545-34.442 7.246 12.311 17.753 22.565 30.216 29.78l-4.049 46.846a8.784 8.784 0 004.149 8.234 8.776 8.776 0 009.22-.013l12.95-8.014zm109.885-108.625h-18.646a8.778 8.778 0 00-8.528 6.694c-7.035 28.755-32.647 48.839-62.283 48.839-29.558 0-56.937-20.532-64.133-47.907v-77.606c0-14.048 11.428-25.476 25.476-25.476h7.062a8.78 8.78 0 000-17.56h-7.062c-9.527 0-18.337 3.117-25.476 8.378V91.651a8.78 8.78 0 00-17.56 0v32.926a42.802 42.802 0 00-25.476-8.378h-7.06a8.78 8.78 0 000 17.56h7.06c14.048 0 25.476 11.429 25.476 25.476v77.606c-7.196 27.376-34.576 47.907-64.133 47.907-29.637 0-55.249-20.084-62.283-48.839a8.781 8.781 0 00-8.528-6.694H93.629c-26.27 0-47.642-21.372-47.642-47.642 0-26.27 21.372-47.642 47.642-47.642h34.996a8.78 8.78 0 000-17.56h-25.392c4.134-22.088 23.548-38.862 46.818-38.862h31.251v17.668a8.78 8.78 0 0017.56 0V69.225C201.798 39.749 226.3 17.56 256 17.56c29.809 0 54.389 22.352 57.176 51.991.047.496.141.979.266 1.446v24.179a8.78 8.78 0 0017.56 0V77.509h30.947c23.269 0 42.684 16.773 46.818 38.862h-25.392a8.78 8.78 0 000 17.56h34.996c26.27 0 47.642 21.372 47.642 47.642-.002 26.269-21.372 47.642-47.642 47.642z"></path>
								</svg>
								<span className="text-primary">InterView Quash</span>
							</div>
						</Link>
					</div>
				</div>

				<div className="navbar-end flex">
					<div className="hidden lg:flex">
						<ul className="menu menu-horizontal p-0">
						<li className="uppercase">
								<NavLink to={"home"}>Home</NavLink>
							</li>
						<li className="uppercase">
								<NavLink to={"subjects"}>Subjects</NavLink>
							</li>
							<li className="uppercase">
								<NavLink to={"statistics"}>Statistics</NavLink>
							</li>
							<li className="uppercase">
								<NavLink to={"blog"}>Blog</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
