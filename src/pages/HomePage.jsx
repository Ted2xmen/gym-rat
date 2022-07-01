import AppContainer from '../components/AppContainer'

const HomePage = () => {
const itemLength = 15  // page item limit

  return (
    <div>
      <AppContainer itemLength={itemLength} />
    </div>
  )
}

export default HomePage
