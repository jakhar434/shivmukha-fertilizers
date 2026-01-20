import type { TeamMember } from "@shared/schema";
import { motion } from "framer-motion";
import { UserCircle2 } from "lucide-react";

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-none p-10 text-center border border-border shadow-none hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
    >
      <div className="w-48 h-64 mx-auto mb-8 rounded-none overflow-hidden border-border shadow-2xl relative group bg-neutral-100">
        {member.image ? (
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
            <UserCircle2 className="w-20 h-20" />
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-black text-primary mb-2 uppercase tracking-tight">{member.name}</h3>
      <p className="text-accent font-black text-[10px] uppercase tracking-[0.2em]">{member.role}</p>
    </motion.div>
  );
}
