import React from "react";

export const ImageCard = ({ image }) => {
    const tags = image.tags.split(", ");

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-min">
            {/* Image */}
            <img src={image.webformatURL} className="w-full" />

            {/* Information */}
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    Photo by {image.user}
                </div>
                <ul>
                    <li>
                        <strong>Views: </strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        {image.likes}
                    </li>
                </ul>
            </div>

            {/* Tags */}
            <div className="px-6 py-4">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
};
