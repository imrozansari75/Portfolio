import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Jobs from '../pages/Jobs'
import Projects from '../pages/Projects'
import Education from '../pages/Education'

const MainLayout = () => {
  return (
    <main className="h-screen px-0 md:px-32 py-4 flex flex-col">
      <div className="flex-1 rounded-3xl bg-black/30 flex flex-col overflow-hidden">
        <Header />

        <div className="flex flex-1 h-full w-full overflow-hidden">
          {/* ______ Left Panel ______ */}
          <div className="w-[220px] md:pl-8 border-r overflow-y-auto">
            <Sidebar />
          </div>

          {/* ______ Right Panel (Scrollable Only Inside This) ______ */}
          <div className="flex-1 overflow-y-auto px-10 py-8">
            <About />
            <Skills />
            <Jobs />
            <Projects />
            <Education />
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainLayout
