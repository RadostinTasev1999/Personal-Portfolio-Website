export default function Badge() {

    return (
        <div className="opacity-100 transform-none mb-4">
            <div id="available-badge" className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-sm text-emerald-400">
                <span id="status-dot" className="h-2 w-2 rounded-full bg-green-400"></span>
                Available for opportunities
            </div>
        </div>
    );
}