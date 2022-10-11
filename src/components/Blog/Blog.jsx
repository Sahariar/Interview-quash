import React from "react";

const Blog = () => {
	return (
		<section className="py-6 sm:py-12 blog-area">
			<div className="container p-6 mx-auto space-y-8">
				<div className="space-y-2 text-center">
					<h2 className="text-3xl font-bold">Blog</h2>
					<p className="font-serif text-xl">Learn More about Programming</p>
				</div>
				{/* article 1 */}
				<article className="p-5 mx-auto sm:p-10 md:p-16 bg-accent rounded-xl">
					<div className="flex flex-col max-w-4xl mx-auto overflow-hidden rounded">
						<img
							src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
							alt=""
							className="w-full h-60 sm:h-96 "
						/>
						<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-5xl sm:px-10 sm:mx-12 rounded-md  ">
							<div className="space-y-2">
								<a
									rel="noopener noreferrer"
									href="#"
									className="inline-block text-2xl font-semibold sm:text-3xl bg-secondary p-10"
								>
									What is the purpose of react router ?
								</a>
							</div>
							<div className="flex justify-start">
								<span className="px-2 py-1 text-xs rounded-full bg-primary text-white ">
									React Router
								</span>
							</div>
							<div className="text-accent-content">
								<p className="flex-1 py-2">
									Routing is a process in which a user is directed to different
									pages based on their action or request. ReactJS Router is
									mainly used for developing Single Page Web Applications. React
									Router is used to define multiple routes in the application.
									When a user types a specific URL into the browser, and if this
									URL path matches any 'route' inside the router file, the user
									will be redirected to that particular route.
								</p>
								<p className="flex-1 py-2">
									React Router is a standard library system built on top of the
									React and used to create routing in the React application
									using React Router Package. It provides the synchronous URL on
									the browser with data that will be displayed on the web page.
									It maintains the standard structure and behavior of the
									application and mainly used for developing single page web
									applications.
								</p>
								<h2 className="text-2xl font-bold  py-3">
									Why use React Router?
								</h2>
								<p className="flex-1 py-2">
									React Router, and dynamic, client-side routing, allows us to
									build a single-page web application with navigation without
									the page refreshing as the user navigates. React Router uses
									component structure to call components, which display the
									appropriate information.{" "}
								</p>
								<p className="flex-1 py-2">
									By preventing a page refresh, and using Router or Link, which
									is explained in more depth below, the flash of a white screen
									or blank page is prevented. This is one increasingly common
									way of having a more seamless user experience. React router
									also allows the user to utilize browser functionality like the
									back button and the refresh page while maintaining the correct
									view of the application.
								</p>
								<h2 className="text-2xl font-bold  py-3">
									What happens when you need to navigate TWO routing system?
								</h2>
								<p className="flex-1 py-2">
									An API is any place where a piece of code talks to another
									piece of code, but we often use it to mean somebody’s external
									resource that gives me values, or our own internal database
									resource(s).
								</p>
								<p className="flex-1 py-2">
									If you are using a frontend and a backend, and you are
									potentially writing in multiple languages that don’t
									necessarily have the same routing conventions, don’t worry!
									The backend functions just as an API, and the user really
									doesn’t interact with it at all. The routes that used to
									manage the user experience and the routes that used to manage
									queries to the database are not the same.
								</p>
							</div>
						</div>
					</div>
				</article>
				{/* article 2 */}
				<article className="p-5 mx-auto sm:p-10 md:p-16 bg-accent rounded-xl">
					<div className="flex flex-col max-w-4xl mx-auto overflow-hidden rounded">
						<img
							src="https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
							alt=""
							className="w-full h-60 sm:h-96 "
						/>
						<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-5xl sm:px-10 sm:mx-12 rounded-md  ">
							<div className="space-y-2">
								<a
									rel="noopener noreferrer"
									href="#"
									className="inline-block text-2xl font-semibold sm:text-3xl bg-secondary p-10"
								>
									How does context api work?
								</a>
							</div>
							<div className="flex justify-start">
								<span className="px-2 py-1 text-xs rounded-full bg-primary text-white ">
									Context API
								</span>
							</div>
							<div className="text-accent-content">
								<p className="flex-1 py-2">
									The React Context API is a way for a React app to effectively
									produce global variables that can be passed around. This is
									the alternative to "prop drilling" or moving props from
									grandparent to child to parent, and so on. Context is also
									touted as an easier, lighter approach to state management
									using Redux.
								</p>
								<p className="flex-1 py-2">
									React.createContext() is all you need. It returns a consumer
									and a provider. Provider is a component that as it's names
									suggests provides the state to its children. It will hold the
									"store" and be the parent of all the components that might
									need that store. Consumer as it so happens is a component that
									consumes and uses the state. More information can be found on
									React's documentation page
								</p>
							</div>
						</div>
					</div>
				</article>
				{/* article 3 */}
				<article className="p-5 mx-auto sm:p-10 md:p-16 bg-accent rounded-xl">
					<div className="flex flex-col max-w-4xl mx-auto overflow-hidden rounded">
						<img
							src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
							alt=""
							className="w-full h-128 sm:h-96 "
						/>
						<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-5xl sm:px-10 sm:mx-12 rounded-md  ">
							<div className="space-y-2">
								<a
									rel="noopener noreferrer"
									href="#"
									className="inline-block text-2xl font-semibold sm:text-3xl bg-secondary p-10"
								>
									what is useRef in react ?
								</a>
							</div>
							<div className="flex justify-start">
								<span className="px-2 py-1 text-xs rounded-full bg-primary text-white ">
									useRef
								</span>
							</div>
							<div className="text-accent-content">
								<p className="flex-1 py-2">
									useRef is like a “box” that can hold a mutable value in its
									.current property. You might be familiar with refs primarily
									as a way to access the DOM. If you pass a ref object to React
									with {`<div ref={myRef} />`}, React will set its .current
									property to the corresponding DOM node whenever that node
									changes.
								</p>
								<p className="flex-1 py-2">
									However, useRef() is useful for more than the ref attribute.
									It’s handy for keeping any mutable value around similar to how
									you’d use instance fields in classes.
								</p>
								<h2 className="text-2xl font-bold  py-3">
									Why we use useRef in React?
								</h2>
								<p className="flex-1 py-2">
									The useRef Hook allows you to persist values between renders.
									It can be used to store a mutable value that does not cause a
									re-render when updated. It can be used to access a DOM element
									directly.
								</p>
							</div>
						</div>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Blog;
