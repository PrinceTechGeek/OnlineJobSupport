export type ApplicationIdeaPostForm = {
  title: string;
  description: string;
  tags: string[];
  details: string;
  features: string;
  architectureType: string;
  contactInfo: string;
  companyProfile: string;
  appType: string;
  image: File | null;
};
