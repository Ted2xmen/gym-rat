import React from 'react'

const FirstHero = () => {
  return (
    <div>
      <section className="relative bg-white">
        <img
          className="absolute inset-0 h-full w-full object-cover object-[75%] opacity-25 sm:object-[25%] sm:opacity-100"
          src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="gym"
        />

        <div className="hidden sm:absolute sm:inset-0 sm:block "></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-6xl font-extrabold sm:text-5xl">
              GYM
              <strong className="font-extrabold text-rose-700 sm:block">
                 RAT
              </strong>
            </h1>


            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                href="/get-started">
                Get Started
              </a>

              <a
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                href="/about">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FirstHero
