export type TicketSubmission = {
  name: string;
  email: string;
  subject: string;
  category: string;
  description: string;
  priority: string;
  attachment: File | null;
};
