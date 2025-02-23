import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import ActsCard from '../../components/ActsCard/actsCard';
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import bg from '../../assets/bg.jpg'

const Acts = [
    {
        id: 1,
        name: "The Delhi Sales Tax Act",
        description: "The Delhi Sales Tax Act was a law governing the levy and collection of sales tax on goods sold within delhi. It regulated tax,rates,exe.."
    },
    {
        id: 2,
        name: "The Delhi Sales Tax Act",
        description: "The Delhi Sales Tax Act was a law governing the levy and collection of sales tax on goods sold within delhi. It regulated tax,rates,exe.."
    },
    {
        id: 3,
        name: "The Mumbai Sales Tax Act",
        description: "The Delhi Sales Tax Act was a law governing the levy and collection of sales tax on goods sold within delhi. It regulated tax,rates,exe.."
    },
    {
        id: 4,
        name: "The Delhi Sales Tax Act",
        description: "The Delhi Sales Tax Act was a law governing the levy and collection of sales tax on goods sold within delhi. It regulated tax,rates,exe.."
    },
    {
        id: 5,
        name: "The Delhi Sales Tax Act",
        description: "The Delhi Sales Tax Act was a law governing the levy and collection of sales tax on goods sold within delhi. It regulated tax,rates,exe.."
    },
    {
        id: 6,
        name: "The Delhi Sales Tax Act",
        description: "The Delhi Sales Tax Act was a law governing the levy and collection of sales tax on goods sold within delhi. It regulated tax,rates,exe.."
    },
    {
        id: 7,
        name: "The Delhi Sales Tax Act",
        description: "The Delhi Sales Tax Act was a law governing the levy and collection of sales tax on goods sold within delhi. It regulated tax,rates,exe.."
    },
    {
        id: 8,
        name: "The Delhi Sales Tax Act",
        description: "The Delhi Sales Tax Act was a law governing the levy and collection of sales tax on goods sold within delhi. It regulated tax,rates,exe.."
    },
    {
        id: 9,
        name: "The Delhi Sales Tax Act",
        description: "The Delhi Sales Tax Act was a law governing the levy and collection of sales tax on goods sold within delhi. It regulated tax,rates,exe.."
    },
    {
        id: 10,
        name: "The Delhi Sales Tax Act",
        description: "The Delhi Sales Tax Act was a law governing the levy and collection of sales tax on goods sold within delhi. It regulated tax,rates,exe.."
    },
    {
        id: 11,
        name: "The Delhi Sales Tax Act",
        description: "The Delhi Sales Tax Act was a law governing the levy and collection of sales tax on goods sold within delhi. It regulated tax,rates,exe.."
    },
    {
        id: 12,
        name: "The Delhi Sales Tax Act",
        description: "The Delhi Sales Tax Act was a law governing the levy and collection of sales tax on goods sold within delhi. It regulated tax,rates,exe.."
    }
]

const BareAct = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredActs = Acts.filter(act => 
        act.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        act.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="relative min-h-screen flex flex-col">
            <img 
                src={bg} 
                alt="Background" 
                className="absolute inset-0 w-full h-full object-cover z-[-1]" 
            />
            <div className="relative z-10 grid grid-cols-2 items-center pt-4 pb-4">
                <Link to='/'>
                    <div className="flex items-center ml-8">
                        <FaArrowLeft style={{ color: 'white' }} />
                        <h1 className="text-[#C99F4A] ml-4 font-bold text-3xl">Bare Act</h1>
                    </div>
                </Link>
                <div className="flex items-center justify-end space-x-4 mr-8 relative">
                    <input 
                        type="text" 
                        name="search" 
                        placeholder="search" 
                        className="border-b border-white bg-[#060125] p-2 outline-none text-white" 
                        value={searchQuery} 
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <IoSearch className="text-white absolute top-1/2 right-3 transform -translate-y-1/2" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-20 mr-20 mt-5 relative z-10 mb-12'>
                {filteredActs.map((item, index) => (
                    <ActsCard key={index}
                        {...item} />
                ))}
            </div>
        </div>
    )
}

export default BareAct;
