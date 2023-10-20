import React from 'react'

function questioncard() {
    return (
        <div className="flex w-full max-w-[49rem] flex-row rounded-sm justify-between bg-white bg-clip-border text-gray-700 shadow-md mt-6">
            <div className="p-6">
                <div className='flex flex-row justify-between max-w-[49rem]'>
                    <h6 className="mb-3 text-sm block font-sans   leading-relaxed tracking-normal  antialiased">
                        Pavan Rushik
                    </h6>
                </div>

                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Best restaurant?
                </h4>
                <div>
                    <span className='mr-2'>
                        #food
                    </span>
                    <span>
                        #mess
                    </span>
                </div>

                {/* <a className="inline-block" href="#">
                    <button
                        className="flex select-none items-center gap-2 rounded-lg py-3 px-0 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Learn More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            ></path>
                        </svg>
                    </button>
                </a> */}
            </div>
            <div className='p-6'>
                <p className='inline-blocki text-[12px]'>10-Oct-2023 </p>
            </div>

        </div>
    )
}

export default questioncard