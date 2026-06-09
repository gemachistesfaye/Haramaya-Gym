export interface Plan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  popular: boolean;
  features: { name: string; included: boolean }[];
}

export const plans: Plan[] = [
  {
    id: "day-pass",
    name: "Day Pass",
    monthlyPrice: 100,
    annualPrice: 0,
    description: "Perfect for visitors or trying us out for the first time",
    popular: false,
    features: [
      { name: "Single day access", included: true },
      { name: "Basic equipment usage", included: true },
      { name: "Locker room access", included: true },
      { name: "Free Wi-Fi", included: true },
      { name: "Group classes", included: false },
      { name: "Personal training", included: false },
      { name: "Nutrition consultation", included: false },
      { name: "Recovery zone access", included: false },
    ],
  },
  {
    id: "basic",
    name: "Basic",
    monthlyPrice: 600,
    annualPrice: 480,
    description: "Perfect for beginners starting their fitness journey",
    popular: false,
    features: [
      { name: "24/7 gym access", included: true },
      { name: "Basic equipment usage", included: true },
      { name: "Locker room access", included: true },
      { name: "Free Wi-Fi", included: true },
      { name: "Mobile app access", included: true },
      { name: "Group classes", included: false },
      { name: "Personal training", included: false },
      { name: "Nutrition consultation", included: false },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    monthlyPrice: 1200,
    annualPrice: 960,
    description: "Our most popular plan with comprehensive benefits",
    popular: true,
    features: [
      { name: "24/7 gym access", included: true },
      { name: "All equipment usage", included: true },
      { name: "Locker room access", included: true },
      { name: "Free Wi-Fi", included: true },
      { name: "Unlimited group classes", included: true },
      { name: "Personal training (1/month)", included: true },
      { name: "Nutrition consultation", included: true },
      { name: "Recovery zone access", included: true },
    ],
  },
  {
    id: "elite",
    name: "Elite",
    monthlyPrice: 2500,
    annualPrice: 2000,
    description: "For serious athletes who demand the best",
    popular: false,
    features: [
      { name: "24/7 gym access", included: true },
      { name: "All equipment usage", included: true },
      { name: "Premium locker room", included: true },
      { name: "Free Wi-Fi", included: true },
      { name: "Unlimited group classes", included: true },
      { name: "Unlimited personal training", included: true },
      { name: "Custom nutrition plan", included: true },
      { name: "Body composition analysis", included: true },
    ],
  },
  {
    id: "family",
    name: "Family",
    monthlyPrice: 3500,
    annualPrice: 2800,
    description: "For families of 2-4 members who train together",
    popular: false,
    features: [
      { name: "24/7 gym access (all members)", included: true },
      { name: "All equipment usage", included: true },
      { name: "Locker room access", included: true },
      { name: "Free Wi-Fi", included: true },
      { name: "Unlimited group classes", included: true },
      { name: "Personal training (2/month)", included: true },
      { name: "Family nutrition plan", included: true },
      { name: "Guest privileges (4/month)", included: true },
    ],
  },
];
