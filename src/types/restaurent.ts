export interface Restaurent {
    restaurentName: string;
    address?: string;
    city: string;
    state: string;
  }

export interface RestaurentContextType {
    restaurents: Restaurent[];
    setRestaurents?: (restaurent:Restaurent[])=>void;
}