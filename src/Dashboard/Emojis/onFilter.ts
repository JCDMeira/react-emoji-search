import emojiList from './emojiList.json';

export function onFilter(searchText: string, maxResults = 1820) {
  return emojiList
    .filter((emoji) => {
      return !!(
        emoji.title
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase()) ||
        emoji.keywords.includes(searchText)
      );
    })
    .slice(0, maxResults);
}
