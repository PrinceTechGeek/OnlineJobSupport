export type Course = {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  learners: string;
  description: string;
  thumbnail: string;
  category: string;
  whatYouWillLearn: string[];
  videoId: string;
  curriculum: string[];
  nextSession: {
    date: string;
    time: string;
    amount: number;
  };
  selfPacedLearning: {
    amount: number;
    description: string;
  };
  reviews: {
    user: string;
    rating: number;
    comment: string;
  }[];
};
