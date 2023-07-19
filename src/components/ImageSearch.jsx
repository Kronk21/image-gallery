import React, { useState } from "react";

export const ImageSearch = ({ updateTerm }) => {
    const [search, setSearch] = useState("");

    const onSubmitHandler = function (e) {
        e.preventDefault();

        updateTerm(search);
    };

    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form className="w-full" onSubmit={onSubmitHandler}>
                <div className="flex items-center  border-b-2 border-teal-500 py-2">
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Search Image Term..."
                    />

                    <button
                        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="submit"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};
