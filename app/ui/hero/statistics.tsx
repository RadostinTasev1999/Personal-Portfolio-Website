import { statistics } from "@/app/lib/placeholder-data";
import StatItem from './stat-item';

export default function HeroStatistics() {
    return (
        <div id="hero-stats" className="transform-none flex flex-col mt-6 border border-gray-300 rounded-3xl p-6 gap-3 bg-slate-100 md:flex-row">
            
            {
                        statistics.map((el,i) => (
                          <StatItem key={el.id} name={el.name} stat={el.stat} index={i} />
                        ))
                      }


        </div>
    );
}