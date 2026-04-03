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
      className="group bg-card p-10 text-center border border-border hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 max-w-sm mx-auto w-full"
    >
      <div className="w-48 h-48 mx-auto mb-6 bg-white border border-border overflow-hidden flex items-center justify-center">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <User className="w-16 h-16 text-primary/30" />
        )}
      </div>
      <h3 className="text-xl font-black text-primary mb-2 uppercase tracking-tight">{member.name}</h3>
      <p className="text-accent font-black text-[10px] uppercase tracking-[0.3em]">{member.role}</p>
    </motion.div>
  );
}
