import { ActionBlock, Footer, InfoBlock } from '../components';


export const Home = () => {
  return(
    <div>
      <main className='Home-main'>
        <InfoBlock/>
        <ActionBlock/>
      </main>
      <Footer/>
    </div>
  )
}