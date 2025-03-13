import './App.css'

import { List } from './List'
import { AddNew } from './AddNew'
import { ChangeThemeButton } from './ChangeThemeButton'
import { FilterButton } from './FilterButton'

import { ToDoProvider } from './ListContext'
import { ThemeProvider } from './ThemeContext'


function App() {

  return (
    <>
    <ThemeProvider value={true}>
      
      <ToDoProvider>
        <FilterButton></FilterButton>
        <List></List>
        <AddNew></AddNew>
      </ToDoProvider>

      <ChangeThemeButton></ChangeThemeButton>
    </ThemeProvider>
    </>
  )
}

export default App
