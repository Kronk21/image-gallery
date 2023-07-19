import { useState, useEffect } from "react";
import { ImageCard } from "./components/ImageCard";
import { ImageSearch } from "./components/ImageSearch";

function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState("");

    useEffect(() => {
        fetchImages();
    }, [term]);

    const fetchImages = async function () {
        setIsLoading(true);

        const response = await fetch(
            `https://pixabay.com/api/?key=${
                import.meta.env.VITE_APP_PIXABAY_API_KEY
            }&q=${term}&image_type=photo&pretty=true`
        );

        if (!response.ok) {
            console.log("Something went wrong");
        }

        const data = await response.json();

        setImages(data.hits);
        setIsLoading(false);
    };

    const updateTerm = function (value) {
        setTerm(value);
    };

    return (
        <div className="max-w-6xl mx-auto">
            {/* Search form */}
            <ImageSearch updateTerm={updateTerm} />

            {/* No images found */}
            {!isLoading && images.length === 0 && (
                <h1 className="text-6xl text-center mx-auto mt-32">
                    No images found
                </h1>
            )}

            {/* Images List */}
            {isLoading ? (
                <h1 className="text-6xl text-center mx-auto mt-32">
                    Loading...
                </h1>
            ) : (
                <div className="grid grid-cols-3 gap-4">
                    {images.map((img) => (
                        <ImageCard key={img.id} image={img} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
