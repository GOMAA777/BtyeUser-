export interface MetricCardData {
  title: string;
  value: string | number;
  badge?: {
    text: string;
    variant: 'success' | 'urgent' | 'neutral';
  };
  subtitle?: string;
  secondaryText?: string;
  iconSrc: string;
  comparison?: {
    text: string;
    value: string;
    arrowIcon: string;
  };
  progress?: {
    current: number;
    total: number;
    percent: number;
    marketAverage: string;
  };
}

export interface UnitStatusBreakdown {
  totalUnits: number;
  occupied: number;
  available: number;
  maintenance: number;
  cleaning: number;
  occupiedList: string;
  availableList: string;
  maintenanceList: string;
}

export interface ScheduledMovement {
  id: string;
  type: 'arrival' | 'departure';
  countText: string;
  details: string;
  iconSrc: string;
  bgVariant: 'dark' | 'light';
}

export interface AttentionAlert {
  id: string;
  unit: string;
  badgeText: string;
  badgeVariant: 'urgent' | 'extension' | 'action';
  title: string;
  description: string;
  remainingTime: string;
  actionText: string;
  actionVariant: 'primary' | 'outline';
}

export interface GuestArrival {
  id: string;
  guestName: string;
  guestInitials: string;
  phone: string;
  unitNumber: string;
  unitType: string;
  arrivalTime: string;
  source: string;
  statusBadge: {
    text: string;
    variant: 'active' | 'pending' | 'confirmed';
  };
}

export interface DepartureSpotlight {
  guestName: string;
  checkoutTime: string;
  unitStatus: string;
  nextExpectedArrival: string;
}
