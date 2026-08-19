export default function FooterCopyright() {
    return (
        <div className="font-general-regular flex justify-center items-center text-center">
            <div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
                <p>
                    Next.js & Tailwind CSS Portfolio Project
                </p>
                </div >
        </div>
    )
}