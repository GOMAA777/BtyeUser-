export type TaskType = "cleaning" | "maintenance";
export type TaskStatus = "needs_cleaning" | "in_progress" | "pending" | "completed";

export interface MaintenanceTask {
  id: string; // e.g. "CL-10482", "MN-8821"
  type: TaskType;
  typeLabel: string;
  reference: string;
  unit: {
    id: string;
    number: string;
    name: string;
    floor: string;
    type: string;
  };
  property: {
    id: string;
    code: string;
    name: string;
    city: string;
    district: string;
  };
  owner: {
    id: string;
    code: string;
    name: string;
  };
  bookingReference?: string;
  status: TaskStatus;
  statusLabel: string;
  assignedStaff?: {
    id: string;
    name: string;
    role: string;
    avatar?: string;
    rating?: string;
  };
  createdAt: string;
  createdAtFormatted: string;
  lastUpdated: string;
  reason: string;
  estimatedDuration: string;
  actualDuration?: string;
  startedAt?: string;
  completedAt?: string;
  accessCode?: string;
  lockStatus?: string;
  batteryLevel?: string;
  notes?: string;
  checklist?: {
    id: string;
    text: string;
    completed: boolean;
  }[];
}
