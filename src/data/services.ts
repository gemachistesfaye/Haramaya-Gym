import personalTrainingImage from "@/assets/personal-training.jpg";
import groupClassesImage from "@/assets/group-classes.jpg";
import nutritionImage from "@/assets/nutrition.jpg";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    id: "personal-training",
    title: "Personal Training",
    shortDescription: "One-on-one sessions with certified trainers tailored to your specific goals.",
    fullDescription: "Our personal training program pairs you with a certified trainer who designs a customized workout plan based on your fitness level, goals, and schedule. Whether you're looking to lose weight, build muscle, or improve athletic performance, our trainers provide expert guidance every step of the way.",
    image: personalTrainingImage,
    features: ["Customized workout plans", "Nutritional guidance", "Progress tracking", "Flexible scheduling"],
    benefits: [
      "Faster results with expert guidance",
      "Proper form and injury prevention",
      "Accountability and motivation",
      "Adaptable programs as you progress",
    ],
  },
  {
    id: "body-building",
    title: "Body Building",
    shortDescription: "Specialized programs designed to build muscle mass and sculpt your physique.",
    fullDescription: "Our bodybuilding program is designed for those serious about building serious muscle. With access to premium equipment, advanced training techniques, and expert coaching, you'll have everything you need to sculpt your ideal physique. We offer both recreational and competition preparation tracks.",
    image: groupClassesImage,
    features: ["Muscle building programs", "Competition prep", "Advanced techniques", "Progress monitoring"],
    benefits: [
      "Structured hypertrophy programs",
      "Competition-ready coaching",
      "Advanced periodization methods",
      "Regular body composition assessments",
    ],
  },
  {
    id: "group-classes",
    title: "Group Classes",
    shortDescription: "High-energy group sessions that combine fitness with fun community.",
    fullDescription: "Our group classes offer a fun, energetic workout experience in a supportive community setting. From high-intensity interval training to strength-focused sessions, there's something for everyone. Classes are led by experienced instructors who keep you motivated and ensure proper technique.",
    image: nutritionImage,
    features: ["HIIT workouts", "Strength training", "Cardio sessions", "Weight loss programs"],
    benefits: [
      "Motivating group atmosphere",
      "Variety of class formats",
      "Social connections with members",
      "Professional instructor guidance",
    ],
  },
  {
    id: "nutrition-classes",
    title: "Nutrition Classes",
    shortDescription: "Expert guidance on meal planning and nutrition strategies.",
    fullDescription: "Nutrition is the foundation of any fitness journey. Our nutrition classes teach you how to fuel your body properly for optimal performance and results. Learn about meal planning, macronutrient balance, supplement guidance, and sustainable eating habits from our certified nutritionists.",
    image: personalTrainingImage,
    features: ["Meal planning", "Supplement advice", "Body composition analysis", "Weight management"],
    benefits: [
      "Science-backed nutrition education",
      "Personalized meal recommendations",
      "Sustainable habit building",
      "Better workout performance",
    ],
  },
  {
    id: "recovery-wellness",
    title: "Recovery & Wellness",
    shortDescription: "Massage, sauna, and stretching programs for complete recovery.",
    fullDescription: "Recovery is just as important as training. Our Recovery & Wellness center provides the tools and expertise to help your body recover faster and perform better. From therapeutic massage to sauna sessions and guided stretching routines, we ensure you're always at your best.",
    image: groupClassesImage,
    features: ["Therapeutic massage", "Sauna & steam room", "Stretching programs", "Foam rolling guidance"],
    benefits: [
      "Faster muscle recovery",
      "Reduced risk of injury",
      "Stress relief and relaxation",
      "Improved flexibility and mobility",
    ],
  },
  {
    id: "online-coaching",
    title: "Online Coaching",
    shortDescription: "Virtual training sessions and programs from anywhere.",
    fullDescription: "Can't make it to the gym? Our online coaching program brings the Haramaya Gym experience to you. Get personalized workout plans, video consultations with trainers, and ongoing support through our digital platform. Train anytime, anywhere with professional guidance.",
    image: nutritionImage,
    features: ["Virtual training sessions", "Custom workout plans", "Video consultations", "Progress tracking app"],
    benefits: [
      "Train from anywhere in the world",
      "Flexible scheduling across time zones",
      "Same expert trainer guidance",
      "Digital progress tracking",
    ],
  },
];
