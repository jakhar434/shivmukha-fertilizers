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
      className="group bg-card rounded-none p-10 text-center border border-border shadow-none hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
    >
      <div className="w-64 h-80 mx-auto mb-8 rounded-none overflow-hidden border border-border shadow-2xl relative group bg-neutral-100">
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors" />
        {member.image ? (
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-20 relative"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground relative z-20">
            <UserCircle2 className="w-20 h-20" />
          </div>
        )}
      </div>
      
      <h3 className="text-2xl font-black text-primary mb-2 uppercase tracking-tight">{member.name}</h3>
      <p className="text-accent font-black text-[10px] uppercase tracking-[0.3em]">{member.role}</p>
    </motion.div>
  );
}
