import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Agus Pranyoto
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Frontend Engineer | Passionate about building beautiful and
                  functional web applications.
                </p>
              </div>
              <div className="space-x-4">
                <a
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View Projects
                </a>
                <a
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  About Me
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Featured Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my work
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  These are some of my top projects that showcase my skills in
                  frontend development.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="group rounded-lg bg-white shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:hover:shadow-md">
                <Image
                  src="https://placehold.co/420x240/png"
                  width="420"
                  height="240"
                  alt="Project 1"
                  className="aspect-video overflow-hidden rounded-t-lg object-cover object-center"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold group-hover:text-gray-900 dark:group-hover:text-gray-50">
                    Project 1
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A modern and responsive web application built with the
                    latest frontend technologies.
                  </p>
                </div>
              </div>
              <div className="group rounded-lg bg-white shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:hover:shadow-md">
                <Image
                  src="https://placehold.co/420x240/png"
                  width="420"
                  height="240"
                  alt="Project 2"
                  className="aspect-video overflow-hidden rounded-t-lg object-cover object-center"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold group-hover:text-gray-900 dark:group-hover:text-gray-50">
                    Project 2
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A complex web application with advanced features and
                    functionality.
                  </p>
                </div>
              </div>
              <div className="group rounded-lg bg-white shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:hover:shadow-md">
                <Image
                  src="https://placehold.co/420x240/png"
                  width="420"
                  height="240"
                  alt="Project 3"
                  className="aspect-video overflow-hidden rounded-t-lg object-cover object-center"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold group-hover:text-gray-900 dark:group-hover:text-gray-50">
                    Project 3
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A visually stunning and user-friendly web application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get to know me
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I am a passionate frontend engineer with a strong focus on
                  building beautiful and functional web applications. I have
                  experience working with a variety of frontend technologies,
                  including React, Vue.js, and Angular, and I am always eager to
                  learn new skills and stay up-to-date with the latest industry
                  trends.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold">My Skills</h3>
                  <ul className="grid gap-4">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-5 w-5 text-gray-900 dark:text-gray-50"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span>React.js</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-5 w-5 text-gray-900 dark:text-gray-50"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span>Vue.js</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-5 w-5 text-gray-900 dark:text-gray-50"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span>Angular</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-5 w-5 text-gray-900 dark:text-gray-50"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span>JavaScript</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-5 w-5 text-gray-900 dark:text-gray-50"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span>HTML/CSS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-5 w-5 text-gray-900 dark:text-gray-50"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span>Responsive Design</span>
                    </li>
                  </ul>
                </div>
                <Image
                  src="https://placehold.co/420x240/png"
                  width={420}
                  height={240}
                  alt="About"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Get in touch
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have a project in mind or just want to say hello? Fill out the
                form below and I'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
