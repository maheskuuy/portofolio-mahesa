import { useEffect, useRef, useState } from "react";

// Audio controls: dog bark SFX and looping space ambient track
const AudioControls = () => {
  const audioRef = useRef(null);
  const [isSpaceOn, setIsSpaceOn] = useState(false);

  const playDog = () => {
    const audio = new Audio("/sound/free-dog-bark-419014.mp3");
    audio.volume = 0.5;
    audio.play().catch((e) => console.log("Dog bark play failed:", e));
  };

  const toggleSpace = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/ambient/Tony Ann - ICARUS (feat. ARKAI) - Orchestral Version (Official Visualizer).mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }

    if (isSpaceOn) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsSpaceOn(false);
    } else {
      audioRef.current.play().catch((e) => console.log("Space ambient play failed:", e));
      setIsSpaceOn(true);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col gap-3 rounded-xl border border-white/10 bg-black/50 backdrop-blur px-4 py-3 shadow-lg">
      <p className="text-sm font-semibold text-white">Audio</p>
      <div className="flex gap-2">
        <button
          onClick={playDog}
          className="px-3 py-2 text-sm rounded-md bg-white/10 hover:bg-white/20 transition"
        >
          Bark SFX
        </button>
        <button
          onClick={toggleSpace}
          className="px-3 py-2 text-sm rounded-md bg-white/10 hover:bg-white/20 transition"
        >
          {isSpaceOn ? "Stop Space" : "Play Space"}
        </button>
      </div>
      <p className="text-xs text-neutral-300">Requires user interaction to start audio.</p>
    </div>
  );
};

export default AudioControls;
