import {BulletText} from '@/lib/definitions';

export default function TimeLinePoints({
    text
}: BulletText) {

    return (
        <>
            <li className="relative pl-5">
                <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-blue-500" />
                {text}
                {/* Position Bullet */}
            </li>
        </>
    );
}