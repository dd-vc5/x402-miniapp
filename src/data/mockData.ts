export type Category = 'sports' | 'read' | 'finance' | 'crypto' | 'business' | 'tech' | 'ai' | 'travel';

export interface DataItem {
  id: string;
  title: string;
  description: string;
  seller: string;
  rating: number;
  price: number;
  category: Category;
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
  {
    id: '9',
    title: 'Crypto Market Alpha Signals',
    description: 'Real-time trading signals and market analysis for top cryptocurrencies',
    seller: 'CryptoAlpha',
    rating: 4.8,
    price: 99.99,
    category: 'crypto',
    bgImage: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    content: 'Daily crypto trading signals with entry/exit points, stop-loss levels, and market sentiment analysis. Includes BTC, ETH, and altcoin coverage.',
  },
  {
    id: '10',
    title: 'Stock Market Insights 2024',
    description: 'Weekly stock market analysis and investment recommendations',
    seller: 'FinanceGuru',
    rating: 4.6,
    price: 79.99,
    category: 'finance',
    bgImage: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
    content: 'Comprehensive weekly stock market analysis including sector trends, earnings predictions, and buy/sell recommendations for S&P 500 companies.',
  },
  {
    id: '11',
    title: 'DeFi Protocol Analysis',
    description: 'Deep dive into DeFi protocols with risk assessments and yield opportunities',
    seller: 'DeFiAnalyst',
    rating: 4.9,
    price: 129.99,
    category: 'crypto',
    bgImage: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
    content: 'Detailed analysis of top DeFi protocols including TVL trends, tokenomics, security audits, and yield farming strategies.',
  },
  {
    id: '12',
    title: 'Startup Market Research',
    description: 'Comprehensive market research data for startup founders',
    seller: 'StartupInsights',
    rating: 4.5,
    price: 149.99,
    category: 'business',
    bgImage: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    content: 'Market research reports covering TAM/SAM analysis, competitive landscapes, customer personas, and go-to-market strategies for various industries.',
  },
  {
    id: '13',
    title: 'AI Model Prompt Library',
    description: 'Collection of 1000+ optimized prompts for various AI models',
    seller: 'AIPrompts',
    rating: 4.7,
    price: 49.99,
    category: 'ai',
    bgImage: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    content: 'Curated library of high-performing prompts for GPT-4, Claude, and other LLMs. Includes prompts for coding, writing, analysis, and creative tasks.',
  },
  {
    id: '14',
    title: 'Tech Product Reviews Database',
    description: 'Detailed reviews and analysis of latest tech products',
    seller: 'TechReviewer',
    rating: 4.6,
    price: 39.99,
    category: 'tech',
    bgImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    content: 'Comprehensive database of tech product reviews including smartphones, laptops, gadgets, and software. Includes performance benchmarks and user feedback.',
  },
  {
    id: '15',
    title: 'Trading Strategy Backtests',
    description: 'Historical backtest results for various trading strategies',
    seller: 'TradingPro',
    rating: 4.8,
    price: 199.99,
    category: 'finance',
    bgImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    content: 'Backtested trading strategies with 10+ years of historical data. Includes performance metrics, drawdown analysis, and risk-adjusted returns.',
  },
  {
    id: '16',
    title: 'Argentina Football Clubs Performance Data',
    description: 'Comprehensive performance analytics and predictions for upcoming matches of Argentina football clubs',
    seller: 'FutbolArgentino',
    rating: 4.9,
    price: 49.99,
    category: 'sports',
    bgImage: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
    content: 'Detailed performance data for all major Argentina football clubs including Boca Juniors, River Plate, Racing Club, Independiente, and more. Includes team form, player statistics, injury reports, head-to-head records, and match predictions for upcoming fixtures. Updated daily with latest match results, player performance metrics, and tactical analysis. Perfect for football enthusiasts, bettors, and analysts tracking Argentina Primera División.',
  },
  {
    id: '17',
    title: 'Buenos Aires Vegetarian Dining Guide',
    description: 'Curated list of vegetarian and vegan restaurants in Buenos Aires with local insider knowledge',
    seller: 'BAFoodie',
    rating: 4.8,
    price: 24.99,
    category: 'travel',
    bgImage: 'linear-gradient(135deg, #55efc4 0%, #00b894 100%)',
    content: 'Comprehensive guide to vegetarian and vegan dining in Buenos Aires featuring 100+ restaurants, cafes, and food markets. Includes hidden gems known only to locals, price ranges, best dishes, opening hours, and dietary restrictions (gluten-free, raw, etc.). Also covers neighborhood-specific recommendations, best times to visit, and insider tips for getting the best experience. Updated monthly with new openings and seasonal menu changes.',
  },
  {
    id: '18',
    title: 'Buenos Aires Shopping Guide - Local Secrets',
    description: 'Insider shopping guide for Buenos Aires featuring local markets, boutiques, and hidden gems',
    seller: 'BALocal',
    rating: 4.7,
    price: 29.99,
    category: 'travel',
    bgImage: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)',
    content: 'Exclusive shopping guide covering Palermo, San Telmo, Recoleta, and other neighborhoods. Includes local markets (Feria de San Telmo, Feria de Mataderos), artisan boutiques, leather goods shops, vintage stores, and designer outlets. Features price negotiation tips, best days to shop, local payment methods, and hidden spots tourists never find. Also includes recommendations for souvenirs, local brands, and where to find authentic Argentine products.',
  },
  {
    id: '19',
    title: 'Argentina Travel Curator - Buenos Aires, Bariloche & Ushuaia',
    description: 'Local knowledge and hidden gems for Buenos Aires, Bariloche, and Ushuaia travel experiences',
    seller: 'ArgentinaInsider',
    rating: 4.9,
    price: 59.99,
    category: 'travel',
    bgImage: 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)',
    content: 'Comprehensive travel guide with local insider knowledge for three of Argentina\'s most popular destinations. Buenos Aires: Hidden neighborhoods, local tango spots, best parrillas, street art tours, and cultural experiences. Bariloche: Secret hiking trails, local chocolate shops, off-the-beaten-path viewpoints, best times to visit, and Patagonian cuisine recommendations. Ushuaia: Local tips for Tierra del Fuego, best boat tours, penguin watching spots, local restaurants, and end-of-the-world experiences. Includes seasonal recommendations, weather tips, and monetizable local knowledge.',
  },
  {
    id: '20',
    title: 'Argentina Local Secrets - Monetizable Knowledge Base',
    description: 'Exclusive local knowledge and insider tips for Argentina that can be monetized',
    seller: 'LocalExpert',
    rating: 4.8,
    price: 79.99,
    category: 'travel',
    bgImage: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)',
    content: 'Premium collection of monetizable local knowledge including: Best times to visit attractions (avoid crowds), local transportation hacks, currency exchange tips, tipping culture, safety recommendations, local customs and etiquette, hidden attractions not in guidebooks, local event calendars, seasonal activities, and exclusive access information. Also includes business opportunities, local partnerships, and ways to monetize this knowledge through tours, consulting, or content creation. Perfect for travel agents, tour operators, content creators, and entrepreneurs.',
  },
];

export const getUserListings = (username: string): DataItem[] => {
  return mockDataItems.filter(item => item.seller.toLowerCase() === username.toLowerCase());
};

export const getUserPurchases = (username: string): DataItem[] => {
  return mockDataItems.filter(item => item.purchased === true && item.seller.toLowerCase() === username.toLowerCase());
};

