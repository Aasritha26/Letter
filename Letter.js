document.addEventListener('DOMContentLoaded', () => {
  const envelope = document.getElementById('envelope');
  const letter = document.getElementById('letter');
  const video = document.getElementById('video');

  let isOpen = false;
  let isFullSize = false;

  const tryPlayMedia = async () => {
    try {
      await video.play();
      console.log("Video playback succeeded");
    } catch (e) {
      console.error("Video playback failed:", e);
      window.addEventListener('click', playMediaOnInteraction, { once: true });
    }
  };

  const playMediaOnInteraction = () => {
    video.play().catch(e => console.error("Video playback failed again:", e));
  };

  tryPlayMedia();

  const handleOpenLetter = () => {
    isOpen = true;
    envelope.classList.add('open');
    setTimeout(() => {
      isFullSize = true;
      letter.classList.add('fullSize');
    }, 800);
  };

  const handleCloseLetter = () => {
    isFullSize = false;
    letter.classList.remove('fullSize');
    setTimeout(() => {
      video.pause();
      isOpen = false;
      envelope.classList.remove('open');
    }, 800);
  };

  envelope.addEventListener('click', () => {
    if (!isFullSize) {
      handleOpenLetter();
    } else {
      handleCloseLetter();
    }
  });
});
