"use client";

import { motion } from "motion/react";

type TransitionMount = {
  delay?: number;
  children: React.ReactNode;
};

export const TransitionMount = ({ children, delay = 0 }: TransitionMount) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(4px)", y: 5 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ delay: delay, duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
