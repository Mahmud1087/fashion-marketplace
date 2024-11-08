import { Star } from 'lucide-react';

const StarReview = () => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <>
      <div className='flex gap-1 items-center'>
        {stars.map((star) => {
          return (
            <span
              key={star}
              className={`star ${
                star <= 3 ? 'text-red-500' : 'text-yellow-500'
              }`}
            >
              <Star size={15} />
            </span>
          );
        })}
      </div>
    </>
  );
};
export default StarReview;
