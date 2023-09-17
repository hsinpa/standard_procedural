import '../../styles/globals.scss'
import { SideBarDom } from './sidebar/SideDomElements'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="sidebar"><SideBarDom></SideBarDom></div>
        <main className="mainContent">{children}</main>
      </body>
    </html>
  )
}