import { statistics } from "@/app/lib/placeholder-data";
import StatItem from './stat-item'

export default function HeroStatistics() {
    return (
        <div id="hero-stats" className="transform-none flex flex-row flex-nowrap mt-6 border border-gray-300 rounded-xl p-6 gap-3 bg-slate-200">
            
            {
                        statistics.map((el,i) => (
                          <StatItem key={el.id} name={el.name} stat={el.stat} index={i} />
                        ))
                      }


        </div>
    )
}