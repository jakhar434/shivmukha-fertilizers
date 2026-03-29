import type { TeamMember } from "@shared/schema";

const TEAM: TeamMember[] = [
  { id: 1, name: "Hira Ram", role: "Director", image: "/images/team/hira_ram.jpg" },
  { id: 2, name: "Ramvilash Jat", role: "Director", image: "/images/team/ramvilash_jat.jpg" },
];

export function useTeam() {
  return {
    data: TEAM,
    isLoading: false,
    error: null,
  };
}
