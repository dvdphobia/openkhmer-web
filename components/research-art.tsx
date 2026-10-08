export function ResearchArt({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`research-art ${compact ? "research-art--compact" : ""}`} aria-hidden="true">
      <div className="research-art-grid" />
      <span className="research-art-caption">OPENKHMER / SCRIPT STUDY</span>
      <div className="script-sheet sheet-back"><span lang="km">ភាសាខ្មែរ</span><i /><i /><i /></div>
      <div className="script-sheet sheet-front"><span className="sheet-label">KHMER · U+1780</span><span className="sheet-character" lang="km">ក</span><span className="sheet-baseline" /><span className="sheet-label">IMAGE → CHARACTER</span></div>
      <div className="script-index"><span>01</span><span>TEXT RECOGNITION<br />RESEARCH IN PROGRESS</span></div>
    </div>
  );
}
