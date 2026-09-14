import { statistics } from "@/app/lib/placeholder-data";
import StatItem from './stat-item';

export default function HeroStatistics() {
    return (
        <div id="hero-stats" className="transform-none flex flex-col mt-6 p-6 gap-3 bg-[#f5f8ff] md:flex-row">
            
            {
                        statistics.map((el) => (
                          <StatItem key={el.id} name={el.name} stat={el.stat} />
                        ))
                      }


        </div>
    );
}