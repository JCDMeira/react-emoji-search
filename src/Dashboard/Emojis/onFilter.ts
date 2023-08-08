import emojiList from './emojiList.json';

type onFilterDTO = {
  searchText: string;
  maxResults?: number;
};

export const onFilter = ({ searchText, maxResults = 1820 }: onFilterDTO) => {
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
};
