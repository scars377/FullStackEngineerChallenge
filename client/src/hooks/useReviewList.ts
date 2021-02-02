import { useEffect, useState } from 'react';
import * as reviews from '../api/reviews';

const useReviewList = (revieweeId: number) => {
  const [list, setList] = useState<Review[]>([]);

  useEffect(() => {
    fetchList(revieweeId);
  }, [revieweeId]);

  const fetchList = async (revieweeId: number) => {
    const { data } = await reviews.list(revieweeId);
    setList(data);
  };

  return { list, fetchList };
};

export default useReviewList;
