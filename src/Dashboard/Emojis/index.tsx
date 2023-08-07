/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { EmojiResultRow } from './EmojiResultRow';
import Clipboard from 'clipboard';

export const Emojis: React.FC<any> = ({ emojiData }) => {
  useEffect(() => {
    const clipboard = new Clipboard('.copy-it');

    return () => clipboard.destroy();
  }, []);

  return (
    <div className="component-emoji-results">
      {emojiData.map((emoji: any) => (
        <EmojiResultRow
          key={emoji.title}
          symbol={emoji.symbol}
          title={emoji.title}
        />
      ))}
    </div>
  );
};
