export enum SelectedPage {
    Home = "home",
    Benefits = "about us",
    OurClasses = "our visions",
    Contact = "contact"
  }

export interface BenefitType {
  icon: JSX.Element;
  title: string;  
  description: string;  
}

export interface ClassType {
  name: string;
  description?: string;
  image: string; 
}