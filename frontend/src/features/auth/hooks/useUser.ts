import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/auth.api";

export function useUser() {
  const query = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
  });

  return query;
}
