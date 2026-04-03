import type { TeamMember } from "@shared/schema";

const TEAM: TeamMember[] = [
  { id: 1, name: "Puran Singh", role: "Director", image: "images/team/purana_singh.png" },
];

export function useTeam() {
  return {
    data: TEAM,
    isLoading: false,
    error: null,
  };
}
