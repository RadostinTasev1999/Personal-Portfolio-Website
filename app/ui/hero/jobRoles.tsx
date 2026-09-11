import * as motion from "motion/react-client";

export default function JobRoles() {
    return(
        <motion.div
            id="hero-role"
            className="text-xl
                                font-medium
                                "
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <div id="hero-stack">
                <span id="role-text" className="text-blue-500">{`JavaScript Developer / React Engineer / Problem Solver ...`}</span>
                <motion.span
                    id="cursor"
                    className="ml-1 text-blue-500 inline-flex"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    |
                </motion.span>
            </div>
            
        </motion.div>
    );
}