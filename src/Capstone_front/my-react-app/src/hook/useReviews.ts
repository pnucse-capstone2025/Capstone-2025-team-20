import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { submitReview, getReviewsBySalesId, ReviewRequest, ReviewResponse } from '../api/reviewAPI';

// 리뷰 목록 조회
export function useReviewsBySalesId(salesId: number) {
  return useQuery({
    queryKey: ['reviews', 'salesId', salesId],
    queryFn: () => getReviewsBySalesId(salesId),
    staleTime: 2 * 60 * 1000, // 2분
    gcTime: 5 * 60 * 1000, // 5분
  });
}

// 리뷰 등록 뮤테이션
export function useSubmitReview() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ review, token }: { review: ReviewRequest; token: string }) =>
      submitReview(review, token),
    onSuccess: (_, variables) => {
      // 리뷰 등록 성공 시 해당 salesId의 리뷰 목록을 다시 불러오기
      queryClient.invalidateQueries({
        queryKey: ['reviews', 'salesId', variables.review.salesId]
      });
    },
  });
}


