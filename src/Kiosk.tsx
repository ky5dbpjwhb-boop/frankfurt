export default function Kiosk() {
    return (
        <video
            src="images/copy_676E830D-8793-4A82-A970-B1DCC59222B7.mp4"
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
