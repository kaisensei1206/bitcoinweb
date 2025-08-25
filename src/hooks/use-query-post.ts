import { getPostById } from "@/service/post";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const useQueryPost = () => {
  const { id } = useParams();

  return useQuery({
    queryKey: ["post", id],
    queryFn: () => getPostById(id as string),
  });
};

export default useQueryPost;