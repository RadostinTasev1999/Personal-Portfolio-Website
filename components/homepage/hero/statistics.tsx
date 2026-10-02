import {HeroStatsData} from '@/lib/definitions';
import StatItem from './StatItem';

export default function HeroStatistics({
    statistics
}: HeroStatsData) {
    return (
        <div id="hero-stats" className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-slate-200 pt-8 md:grid-cols-4">
            
            {
                        statistics.map((el) => (
                          <StatItem key={el.id} name={el.name} stat={el.stat} />
                        ))
                      }


        </div>
    );
}