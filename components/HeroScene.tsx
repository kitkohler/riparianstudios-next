export default function HeroScene() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://res.cloudinary.com/drpr93xmp/video/upload/q_auto,f_jpg,so_0/v1780700850/RP_Reel_26-06_30_vdxswg.jpg"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '177.78vh',
          height: '100vh',
          minWidth: '100%',
          minHeight: '56.25vw',
          objectFit: 'cover',
        }}
      >
        <source src="https://res.cloudinary.com/drpr93xmp/video/upload/q_auto/f_auto/v1780700850/RP_Reel_26-06_30_vdxswg.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
