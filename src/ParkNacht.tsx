export default function ParkNacht() {
    return (
        <video
            src="images/copy_F58FD634-C0FF-49D0-AC39-A3D9E6B0157A.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 0,
            }}
        />
    )
}
