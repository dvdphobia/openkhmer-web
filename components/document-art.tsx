export function DocumentArt() {
  return (
    <div
      className="document-art"
      role="img"
      aria-label="Original illustration of a Khmer document becoming digital text"
    >
      <div className="art-coordinate">FIG. 001 / THE DIGITAL POSSIBILITY</div>
      <div className="lime-orbit">
        <div className="orbit-ring ring-one" />
        <div className="orbit-ring ring-two" />
        <div className="orbit-ring ring-three" />
        <div className="orbit-grid" />
      </div>
      <div className="back-paper">
        <span lang="km">ភាសាខ្មែរ</span>
        <i />
        <i />
        <i />
      </div>
      <div className="main-paper">
        <div className="paper-header">
          <span>OPENKHMER / RESEARCH</span>
        </div>
        <div className="paper-glyph" lang="km">
          ក
        </div>
        <div className="glyph-frame">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="paper-rule" />
        <div className="paper-text" lang="km">
          អក្សរខ្មែរ
          <br />
          ចំណេះដឹង និងអនាគត
        </div>
        <div className="paper-bottom">
          <span>KHMER SCRIPT</span>
          <span>01—ក</span>
        </div>
      </div>

      <div className="digital-card">
        <div>
          <span className="status-dot" /> DIGITAL TEXT / CONCEPT
        </div>
        <p lang="km">អក្សរខ្មែរ</p>
        <span className="digital-code">
          Khmer Unicode text
          <span className="code-cursor" />
        </span>
      </div>
      <div className="floating-label">
        <span>ក</span> Printed Khmer
      </div>
      <div className="art-bottom-label">
        AN ILLUSTRATION OF OUR VISION <span>↗</span>
      </div>
    </div>
  );
}
