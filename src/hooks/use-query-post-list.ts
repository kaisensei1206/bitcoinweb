import { useQuery } from "@tanstack/react-query";
import { getPostlist } from "@/service/post";
import { useSearchParams } from "next/navigation";
const useQueryPostList = () => {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") || "1";

  return useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => getPostlist(currentPage),
  });
};

export default useQueryPostList;