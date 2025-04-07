'use client'

interface RatingProps {
    rating: number
}

export default function Rating({ rating }: RatingProps) {
    // Ensure rating is between 0 and 5
    const normalizedRating = Math.min(Math.max(rating, 0), 5)

    // Create an array of 5 elements to represent stars
    const stars = Array.from({ length: 5 }, (_, index) => {
        // If the index is less than the rating, show a filled star
        // If the index is equal to the rating and it's not a whole number, show a half star
        // Otherwise, show an empty star
        if (index < Math.floor(normalizedRating)) {
            return '★'
        } else if (index === Math.floor(normalizedRating) && normalizedRating % 1 !== 0) {
            return '½'
        } else {
            return '☆'
        }
    })

    return (
        <div className="flex items-center">
            <div className="text-yellow-500 flex">
                {stars.map((star, index) => (
                    <span key={index} className="text-xl">{star}</span>
                ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">{normalizedRating.toFixed(1)}</span>
        </div>
    )
} 