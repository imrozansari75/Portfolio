import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Jobs from '../pages/Jobs'
import Projects from '../pages/Projects'
import Education from '../pages/Education'

const MainLayout = () => {
  return (
   <main className="px-2 sm:px-28 py-4 flex flex-col h-screen overflow-y-auto custom-scrollbar">
      <div className="flex-1 rounded-3xl bg-black/30 flex flex-col overflow-hidden">
        <Header />

        <div className="flex flex-1 h-full w-full overflow-hidden">
          {/* ______ Left Panel ______ */}
          <div className="md:block sm:w-[250px] md:pl-8 border-r border-white/20 overflow-y-auto">
            <Sidebar />
          </div>

          {/* ______ Right Panel (Scrollable Only Inside This) ______ */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6">
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
