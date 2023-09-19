import '../../styles/globals.scss'
import { SideBarDom } from './sidebar/SideDomElements'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="className">
        <aside className="column"><SideBarDom></SideBarDom></aside>
        <main className="column is-four-fifths">{children}</main>
      </body>
    </html>
  )
}