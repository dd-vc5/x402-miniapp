export interface DataItem {
  id: string;
  title: string;
  description: string;
  seller: string;
  rating: number;
  price: number;
  category: 'sports' | 'read';
  bgImage: string;
  content: string;
  purchased?: boolean;
}

export interface User {
  username: string;
  earnings: number;
  rating: number;
}

export const mockUser: User = {
  username: 'john_doe',
  earnings: 200,
  rating: 4.5,
};

export const mockDataItems: DataItem[] = [
  {
    id: '1',
    title: 'NBA Statistics 2024',
    description: 'Complete NBA player statistics and team performance data for the 2024 season',
    seller: 'DataPro',
    rating: 4.8,
    price: 29.99,
    category: 'sports',
    bgImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    content: 'This dataset contains comprehensive NBA statistics including player performance metrics, team statistics, game results, and advanced analytics. Updated weekly throughout the season.',
  },
  {
    id: '2',
    title: 'Football Match Analysis',
    description: 'Detailed analysis of Premier League matches with player heatmaps and tactical data',
    seller: 'SportsAnalytics',
    rating: 4.6,
    price: 39.99,
    category: 'sports',
    bgImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    content: 'Complete match analysis data including player positions, pass maps, shot locations, and tactical formations for all Premier League matches.',
  },
  {
    id: '3',
    title: 'Classic Literature Collection',
    description: 'Digital collection of 100 classic novels in structured format',
    seller: 'BookHub',
    rating: 4.9,
    price: 49.99,
    category: 'read',
    bgImage: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    content: 'A curated collection of 100 classic novels formatted as structured data, including metadata, chapter breakdowns, character analysis, and thematic tags.',
    purchased: true,
  },
  {
    id: '4',
    title: 'Research Papers Database',
    description: 'Collection of 10,000 academic research papers with metadata and abstracts',
    seller: 'AcademicData',
    rating: 4.7,
    price: 79.99,
    category: 'read',
    bgImage: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    content: 'Comprehensive database of academic research papers across multiple disciplines, including full metadata, abstracts, keywords, and citation networks.',
    purchased: true,
  },
  {
    id: '5',
    title: 'Tennis Match Data',
    description: 'ATP and WTA match statistics with player rankings and head-to-head records',
    seller: 'TennisStats',
    rating: 4.5,
    price: 34.99,
    category: 'sports',
    bgImage: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    content: 'Complete tennis match data including scores, player statistics, rankings history, and head-to-head records for ATP and WTA tours.',
  },
  {
    id: '6',
    title: 'E-Book Library',
    description: 'Digital library of 500 contemporary e-books in multiple formats',
    seller: 'DigitalBooks',
    rating: 4.4,
    price: 59.99,
    category: 'read',
    bgImage: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    content: 'Digital library containing 500 contemporary e-books in various formats, with metadata, summaries, and reading analytics.',
  },
  {
    id: '7',
    title: 'Basketball Analytics Dataset',
    description: 'Advanced basketball analytics with shot charts and player movement data',
    seller: 'john_doe',
    rating: 4.6,
    price: 45.99,
    category: 'sports',
    bgImage: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    content: 'Comprehensive basketball analytics dataset featuring shot charts, player movement tracking, and advanced performance metrics for professional leagues.',
  },
  {
    id: '8',
    title: 'Tech Articles Collection',
    description: 'Curated collection of 500 technology articles and tutorials',
    seller: 'john_doe',
    rating: 4.7,
    price: 35.99,
    category: 'read',
    bgImage: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    content: 'A carefully curated collection of 500 technology articles covering programming, web development, AI, and more. Includes code examples and tutorials.',
  },
];

export const getUserListings = (username: string): DataItem[] => {
  return mockDataItems.filter(item => item.seller.toLowerCase() === username.toLowerCase());
};

export const getUserPurchases = (username: string): DataItem[] => {
  return mockDataItems.filter(item => item.purchased === true);
};

