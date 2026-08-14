export default function AboutLayout({ children }: LayoutProps<"/">) {

    return (
        <>
            <div id="about" className="relative bg-white overflow-hidden mt-16">
                {children}
            </div>
        </>
    )
}