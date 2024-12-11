export type CourseForm = {
  title: string;
  instructors: string[];
  category: string;
  description: string;
  rating: number;
  learners: string;
  image: File | null;
  nextSessionDate: Date | null;
  nextSessionTime: string;
  selfPacedPrice: number;
  selfPacedDescription: string;
  technologies: string[];
  curriculum: string[];
};
