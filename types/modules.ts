export interface IccordionProps {
  children: React.ReactNode
  title: string | JSX.Element
  titleClass: string
  rotateIconClass?: string
}

export interface MenuLinkItemProps {
  item: {
    id: number
    text: string
    href: string
  }
  handleRedirectToCatalog: (argo: string) => void
}
