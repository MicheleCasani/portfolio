
const Video = () => {
    return (
        <>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                overflow: 'hidden'
            }}>
                <video
                    autoPlay
                    muted
                    loop
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                    onLoadedData={(e) => e.target.playbackRate = 1.0}
                    onError={() => console.log('Video failed to load')}
                >
                    <source src="/sea.mp4" type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default Video
