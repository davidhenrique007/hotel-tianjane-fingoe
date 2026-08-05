import { useQuery } from "@tanstack/react-query";
import type { Service } from "@/types";

async function fetchServices(): Promise<Service[]> {
  const response = await fetch("/api/services");
  if (!response.ok) {
    throw new Error("Erro ao carregar serviços");
  }
  return response.json();
}

export function useServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
  });
}