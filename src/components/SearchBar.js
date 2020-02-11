import React, {useState} from 'react'

const SearchBar = (props) => {
    const [search, setSearch] = useState("")
    

    const handleChange = event => {
        const { value } = event.target;
        setSearch(value);
    };
    return (
        <form onSubmit={props.handleSubmit} className="flex flex-wrap">
        <div className="w-3/4">
            <input name="search" value={search} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" placeholder="search..." />
        </div>
        <div className="w-1/4 flex justify-center ">
        <button className="bg-blue-500 px-4 py-2 rounded">Go 💥 </button>
        </div>
        </form>
    )
}
export default SearchBar;