export default function BalconyNacht() {
    return (
        <video
            src="images/copy_8EAE0ACB-4742-40D2-8037-BCEFA602FEBD.mp4"
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
