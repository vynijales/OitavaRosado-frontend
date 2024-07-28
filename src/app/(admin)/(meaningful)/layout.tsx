

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <>
            <div className="absolute top-0 left-0 w-full h-[37vh] bg-primary"></div>
            <div className="w-full xl:w-4/5 z-0 flex flex-col self-center pt-6">
                {children}
            </div>
        </>
    )
}