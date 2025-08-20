import { Workshop } from '@generated/api';

export interface WorkshopServicesCardProps {
  workshop: Workshop;
  className?: string;
  bgColor?: string;
  onPurchaseInitiated?: (workshop: Workshop) => Promise<void>;
  onBookNow?: (workshop: Workshop) => void;
}
