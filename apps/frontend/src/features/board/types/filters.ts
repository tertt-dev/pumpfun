export type SortOption = 'featured' | 'newest' | 'oldest' | 'most-liked';

export interface FilterState {
  sort: SortOption;
  showAnimations: boolean;
  includeNsfw: boolean;
  selectedTags: string[];
}

export interface Tag {
  id: string;
  label: string;
  isHot?: boolean;
}

export const FILTER_TAGS: Tag[] = [
  { id: 'corporate-giants', label: '🔥🔥Corporate Giants🏢🚀', isHot: true },
  { id: 'political-parody', label: '🔥🔥Political Parody🎭🇺🇸', isHot: true },
  { id: 'absurd-humor', label: '🔥Absurd Humor😂💩', isHot: true },
  { id: 'onchain-movement', label: '🔥Onchain Movement⛓️🌎', isHot: true },
  { id: 'financial-mockery', label: '🔥Financial Mockery💸🤣', isHot: true },
  { id: 'ai-frenzy', label: '🔥AI Frenzy🤖🚀', isHot: true },
  { id: 'animal-memes', label: '🔥Animal Memes🐾✨', isHot: true },
  { id: 'corporate-mashups', label: 'Corporate Mashups🛒🏢' },
  { id: 'jewish-humor', label: 'Jewish Humor🕎😄' },
  { id: 'stock-index-parody', label: 'Stock Index Parody📉🤣' },
  { id: 'new-mascots', label: 'New Mascots🐧✨' },
  { id: 'crypto-personalities', label: 'Crypto Personalities👤📢' }
]; 