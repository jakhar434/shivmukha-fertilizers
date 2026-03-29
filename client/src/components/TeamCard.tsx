import type { TeamMember } from "@shared/schema";
import { motion } from "framer-motion";
import { User } from "lucide-react";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card p-10 text-center border border-border hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
    >
      <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
        <User className="w-9 h-9 text-primary group-hover:text-white transition-colors duration-500" />
      </div>
      <h3 className="text-xl font-black text-primary mb-2 uppercase tracking-tight">{member.name}</h3>
      <p className="text-accent font-black text-[10px] uppercase tracking-[0.3em]">{member.role}</p>
    </motion.div>
  );
}
