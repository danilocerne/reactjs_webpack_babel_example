import { Counter } from './components/Counter'
import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'
export function App() {
    //throw new Error("Houve um erro no App!");
    return (
        <>
            <RepositoryList/>
            <Counter />
        </>
    )
}
