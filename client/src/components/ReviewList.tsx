import { ChangeEvent, useState } from 'react';
import * as reviews from '../api/reviews';
import useEmployeeList from '../hooks/useEmployeeList';
import useReviewList from '../hooks/useReviewList';

type Props = {
  revieweeId: number;
};

const ReviewList = ({ revieweeId }: Props) => {
  const { list: reviewList, fetchList } = useReviewList(revieweeId);
  const { list: userList } = useEmployeeList();

  const userMap: Record<number, User> = {};
  userList.forEach((user) => (userMap[user.id] = user));

  const reviewMap: Record<number, boolean> = {};
  reviewList.forEach((review) => (reviewMap[review.reviewerId] = true));

  const reviewers = userList.filter(
    (user) => user.id !== revieweeId && !reviewMap[user.id],
  );

  const [reviewerId, setReviewerId] = useState(-1);

  const onChangeReviewerId = (e: ChangeEvent<HTMLSelectElement>) => {
    setReviewerId(parseInt(e.target.value, 10));
  };

  const addReviewer = async () => {
    await reviews.create({
      reviewerId,
      revieweeId,
      content: '',
    });
    await fetchList(revieweeId);
  };

  return (
    <div>
      <h1>ReviewList</h1>
      <table>
        <thead>
          <tr>
            <th>Reviewer</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {reviewList.map((review) => (
            <tr key={review.id}>
              <td>{userMap[review.reviewerId]?.name}</td>
              <td>{review.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {reviewers.length > 0 && (
        <div>
          <select value={reviewerId} onChange={onChangeReviewerId}>
            <option value={-1} disabled>
              Select Reviewer
            </option>
            {reviewers.map((user) => (
              <option value={user.id} key={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <button onClick={addReviewer}>Add</button>
        </div>
      )}
    </div>
  );
};

export default ReviewList;
