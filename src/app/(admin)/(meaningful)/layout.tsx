

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <>
            <div
                id="background-md"
                className="absolute top-0 left-0 w-full h-2/5 bg-primary"
            >
            </div>
            <div
            className="z-0">
                {children}
            </div>
        </>
    )
}