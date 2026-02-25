export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      menu_categories: {
        Row: {
          id: string;
          name: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          created_at?: string;
        };
      };
      menu_items: {
        Row: {
          id: string;
          category_id: string;
          name: string;
          description: string | null;
          price: number;
          image_url: string | null;
          is_special: boolean;
          available: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          category_id: string;
          name: string;
          description?: string | null;
          price: number;
          image_url?: string | null;
          is_special?: boolean;
          available?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          category_id?: string;
          name?: string;
          description?: string | null;
          price?: number;
          image_url?: string | null;
          is_special?: boolean;
          available?: boolean;
          created_at?: string;
        };
      };
      gallery_images: {
        Row: {
          id: string;
          image_url: string;
          category: string | null;
          uploaded_at: string;
        };
        Insert: {
          id?: string;
          image_url: string;
          category?: string | null;
          uploaded_at?: string;
        };
        Update: {
          id?: string;
          image_url?: string;
          category?: string | null;
          uploaded_at?: string;
        };
      };
      reviews: {
        Row: {
          id: string;
          name: string;
          rating: number;
          review: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          rating: number;
          review: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          rating?: number;
          review?: string;
          created_at?: string;
        };
      };
      reservations: {
        Row: {
          id: string;
          name: string;
          phone: string;
          date: string;
          time: string;
          guests: number;
          special_request: string | null;
          status: "pending" | "approved" | "rejected" | "completed";
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          phone: string;
          date: string;
          time: string;
          guests: number;
          special_request?: string | null;
          status?: "pending" | "approved" | "rejected" | "completed";
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          phone?: string;
          date?: string;
          time?: string;
          guests?: number;
          special_request?: string | null;
          status?: "pending" | "approved" | "rejected" | "completed";
          created_at?: string;
        };
      };
      admins: {
        Row: {
          id: string;
          user_id: string | null;
          email: string;
          role: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          email: string;
          role?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          email?: string;
          role?: string;
          created_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      is_admin: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};
