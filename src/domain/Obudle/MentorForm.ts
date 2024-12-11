export type MentorForm = {
  name: string;
  position: string;
  email: string;
  companyName: string;
  whatsappNumber: string;
  alternativeMobileNumber: string;
  experience: string;
  skills: string[];
  location: string;
  linkedIn: string;
  tellabout: string;
  availableTime: string;
  referral: boolean;
  profile: File | null;
};
