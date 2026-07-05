import { useState, useEffect, useCallback } from 'react';
import { getAvailableYears, getLetter } from './data';
import type { LetterMeta, Letter } from './types/letter';
import BilingualReader from './components/BilingualReader';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [years, setYears] = useState<LetterMeta[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(2023);
  const [letter, setLetter] = useState<Letter | undefined>();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('buffett-theme');
    return (saved === 'dark' ? 'dark' : 'light');
  });

  useEffect(() => {
    const available = getAvailableYears();
    setYears(available);
    if (available.length > 0 && !available.find(y => y.year === selectedYear)) {
      setSelectedYear(available[available.length - 1].year);
    }
  }, []);

  useEffect(() => {
    const data = getLetter(selectedYear);
    setLetter(data);
  }, [selectedYear]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('buffett-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  const currentMeta = years.find(y => y.year === selectedYear);

  const handleYearSelect = useCallback((year: number) => {
    setSelectedYear(year);
    setSidebarOpen(false);
  }, []);

  return (
    <div className="app">
      {/* Sidebar overlay (mobile) */}
      <div
        className={`sidebar-overlay${sidebarOpen ? ' visible' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`sidebar${sidebarOpen ? ' open' : ''}`}>
        <div className="sidebar-header">
          <h1>巴菲特致股东信</h1>
          <div className="subtitle">Berkshire Hathaway Shareholder Letters</div>
          <div className="subtitle" style={{ marginTop: 2 }}>1957 — 2025  ·  双语对照</div>
          <div className="sidebar-theme-toggle">
            <button onClick={toggleTheme}>
              {theme === 'light' ? '🌙 暗色模式' : '☀️ 亮色模式'}
            </button>
          </div>
        </div>
        <div className="year-list">
          {years.map((y) => (
            <button
              key={y.year}
              className={`year-item${y.year === selectedYear ? ' active' : ''}`}
              onClick={() => handleYearSelect(y.year)}
            >
              {y.year}
            </button>
          ))}
        </div>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <div className="toolbar">
          <button
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(prev => !prev)}
            aria-label="选择年份"
          >
            {sidebarOpen ? '✕' : '☰'}
          </button>
          <h2>{letter?.title || '请选择年份'}</h2>
          <span className="year-badge">{selectedYear}</span>
          {currentMeta && (
            <>
              <span className="letter-subtitle">{currentMeta.subtitle}</span>
              <span className="para-count">{currentMeta.paragraphCount} 段落</span>
            </>
          )}
        </div>
        <div className="reading-progress" id="reading-progress">
          <div className="reading-progress-bar" id="reading-progress-bar" />
        </div>
        {letter ? (
          <BilingualReader letter={letter} />
        ) : (
          <div className="empty-state">
            <div className="icon">📖</div>
            <p>请点击左上角菜单选择年份开始阅读</p>
          </div>
        )}
        <Footer />
      </main>
    </div>
  );
}

export default App;
