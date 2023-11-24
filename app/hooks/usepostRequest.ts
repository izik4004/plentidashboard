// usePostRequest.ts
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const usePostRequest = () => {
  return (
    url: string,
    onSuccess: (data: any) => void,
    onError: (error: any) => void
  ) => {
    return useMutation({
      mutationFn: async (data: any) =>
        await axios.post(url, data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3IiwianRpIjoiYzQ2NDcyMDBmMWNhYTEyOTVjNmE1YWZlODA4MzJlMTdjNWZmMGU3ZTMzZGUzNTI2NjA3OGU5MmFlMzAzYzUwNjljYjUyMThmOTI2ZjNiN2QiLCJpYXQiOjE3MDA1NjUyMDUsIm5iZiI6MTcwMDU2NTIwNSwiZXhwIjoxNzMyMTg3NjA1LCJzdWIiOiIxMDQ0OSIsInNjb3BlcyI6W119.Qu7npoF72PWnw3Qz0apGTd5W7XQxTo4DiI02hcVkMubq6K7d1vfl9fOPVSxNLBtLzFV7Rnrd2VYIEsRUom67i45VKxZfGzUzz6NApZkirwA2Q4Gx-hz-nZ6nXABRuW36vvnYXRRqmMqK03R3pnOI3R6aq5fvK033gv6Kmx0TwWtconP3eyIjTviSVD3TGjZYYhDyFZaJPNW8aG5qDz0BJooFZowS28aiMlBisufHJhKlv9w-c7575b5PG0jRBMTQsHHSOLd5wVRGfzfloMI96VDo5auGfRR8PDUvhP76aN0ZPuDZaaOoJqSDBHQ-cAkyQeGOHjHCGSvhiWsiyrf6rebw-7zyWHP6YdXGOqbooQAfYMwf7H-dxLfcES9mitWPt7P2KR2a8lIvPcCubtS8SqU3fKgXttA4HMhuhGZbE_dYpcuqGJJKxOmZL4JGyJUM6m6VA8NeI1ELKxGUY4lGAWTIpztu_IRLviuam8_ecHBwYY2ZPf2xzHrlad_x0kg-axUvvlmrg9je4y0FuftCyBVQlvwEhfTSjAp44jlUiSW29UymHhJABWDo5-Kkn8tNjXbZnppuXaFUL-bLTL7uPRimlL0_U8Jew99yEzik3WrW5pRyU8swM816J4gQKf_jzHn7EjV5vjQ6Welloqgub-PhxTNWhf8HN9fDDCqPLBs`,
          },
        }),
      onSuccess,
      onError,
    });
  };
};

export default usePostRequest;
