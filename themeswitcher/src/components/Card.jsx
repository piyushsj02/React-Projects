import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-gray-200 border border-gray-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="src\image\photo.jpg" alt="Photo" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Piyush Sunil Jadhav
                    </h5>
                </a>
                
                <div className="flex items-center justify-center my-2">
                
                    <a
                        href="https://github.com/piyushsj02"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}