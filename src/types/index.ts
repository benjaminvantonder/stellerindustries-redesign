export interface Service {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly image: string
}

export interface PortfolioItem {
  readonly id: string
  readonly title: string
  readonly category: string
  readonly description: string
  readonly year: string
  readonly image: string
  readonly featured?: boolean
}

export interface Testimonial {
  readonly id: string
  readonly quote: string
  readonly name: string
  readonly role: string
  readonly event?: string
}

export interface NavLink {
  readonly path: string
  readonly label: string
}

export interface Stat {
  readonly value: string
  readonly label: string
}

export interface ProcessStep {
  readonly step: string
  readonly title: string
  readonly text: string
}
