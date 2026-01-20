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
      className="bg-card rounded-2xl p-6 text-center border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
    >
      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-background shadow-lg shadow-black/5 relative group">
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
        {member.image ? (
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
            <UserCircle2 className="w-16 h-16" />
          </div>
        )}
      </div>
      
      <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
      <p className="text-primary font-medium text-sm uppercase tracking-wider">{member.role}</p>
    </motion.div>
  );
}
