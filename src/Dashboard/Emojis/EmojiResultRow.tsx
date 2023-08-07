import './EmojiResultRow.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const EmojiResultRow: React.FC<any> = ({ title, symbol }) => {
  const codePointHex = symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

  return (
    <div
      className="component-emoji-result-row copy-it "
      data-clipboard-text={symbol}
    >
      <img src={src} alt={title} />
      <span className="title">{title}</span>
      <span className="info">Click to Copy</span>
    </div>
  );
};
