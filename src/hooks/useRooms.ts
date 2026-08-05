import { useQuery } from "@tanstack/react-query";
import type { Room } from "@/types";

async function fetchRooms(): Promise<Room[]> {
  const response = await fetch("/api/rooms");
  if (!response.ok) {
    throw new Error("Erro ao carregar quartos");
  }
  return response.json();
}

export function useRooms() {
  return useQuery({
    queryKey: ["rooms"],
    queryFn: fetchRooms,
  });
}