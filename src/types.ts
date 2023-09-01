export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[]

export interface Database {
	public: {
		Tables: {
			pf_visits: {
				Row: {
					created_at: string
					id: number
					ip: string | null
					url: string | null
				}
				Insert: {
					created_at?: string
					id?: number
					ip?: string | null
					url?: string | null
				}
				Update: {
					created_at?: string
					id?: number
					ip?: string | null
					url?: string | null
				}
				Relationships: []
			}
		}
		Views: {
			[_ in never]: never
		}
		Functions: {
			draw_name: {
				Args: {
					groupid: string
					username: string
				}
				Returns: string
			}
		}
		Enums: {
			[_ in never]: never
		}
		CompositeTypes: {
			[_ in never]: never
		}
	}
}

