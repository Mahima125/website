import React from 'react'

const navbar = () => {
    return (
        <div className=''>
            <div className="grid grid-cols-2 items-center p-4">
                <h1 className="text-2xl font-bold">Jurident</h1>
                <div className="flex justify-end space-x-4">
                    <p className="cursor-pointer hover:underline">home</p>
                    <p className="cursor-pointer hover:underline">bare act</p>
                    <p className="cursor-pointer hover:underline">contact</p>
                </div>
            </div>
        </div>
    )
}

export default navbar
