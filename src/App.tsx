import NottEditor from './components/editor'

function App() {
  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke('greet', { name }))
  // }

  return (
    <div className="w-dvw h-dvh flex">
      <div className="w-18 bg-amber-200">sidebar</div>
      <div className="w-100 bg-amber-600">folder</div>
      <NottEditor />
    </div>
  )
}

export default App
