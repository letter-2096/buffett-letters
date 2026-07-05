import { useRef, useEffect, useCallback } from 'react';
import type { Letter } from '../types/letter';

interface Props {
  letter: Letter;
}

function BilingualReader({ letter }: Props) {
  const enRef = useRef<HTMLDivElement>(null);
  const zhRef = useRef<HTMLDivElement>(null);
  const isSyncing = useRef(false);

  const updateProgress = useCallback(() => {
    const bar = document.getElementById('reading-progress-bar');
    const enPanel = enRef.current;
    if (!bar || !enPanel) return;
    const scrollTop = enPanel.scrollTop;
    const scrollHeight = enPanel.scrollHeight - enPanel.clientHeight;
    if (scrollHeight <= 0) {
      bar.style.width = '0%';
      return;
    }
    const pct = Math.min((scrollTop / scrollHeight) * 100, 100);
    bar.style.width = `${pct}%`;
  }, []);

  const syncScroll = useCallback(
    (source: 'en' | 'zh') => {
      if (isSyncing.current) return;
      isSyncing.current = true;

      const sourceRef = source === 'en' ? enRef : zhRef;
      const targetRef = source === 'en' ? zhRef : enRef;
      const s = sourceRef.current;
      const t = targetRef.current;
      if (!s || !t) {
        isSyncing.current = false;
        return;
      }

      const sMax = s.scrollHeight - s.clientHeight;
      const tMax = t.scrollHeight - t.clientHeight;
      if (sMax <= 0 || tMax <= 0) {
        isSyncing.current = false;
        return;
      }

      const ratio = s.scrollTop / sMax;
      t.scrollTop = ratio * tMax;

      updateProgress();

      requestAnimationFrame(() => {
        isSyncing.current = false;
      });
    },
    [updateProgress]
  );

  const handleEnScroll = useCallback(() => syncScroll('en'), [syncScroll]);
  const handleZhScroll = useCallback(() => syncScroll('zh'), [syncScroll]);

  useEffect(() => {
    updateProgress();
  }, [letter, updateProgress]);

  return (
    <div className="reader-container">
      {/* English Panel */}
      <div
        className="reader-panel en-panel"
        ref={enRef}
        onScroll={handleEnScroll}
      >
        <div className="panel-label">English</div>
        {letter.paragraphs.map((para, idx) => (
          <div key={idx} className="paragraph-block">
            <div className="paragraph-number">¶ {idx + 1}</div>
            <p>{para.en}</p>
          </div>
        ))}
      </div>

      {/* Chinese Panel */}
      <div
        className="reader-panel zh-panel"
        ref={zhRef}
        onScroll={handleZhScroll}
      >
        <div className="panel-label">中文</div>
        {letter.paragraphs.map((para, idx) => (
          <div key={idx} className="paragraph-block">
            <div className="paragraph-number">¶ {idx + 1}</div>
            <p>{para.zh}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BilingualReader;
