import { Banner, BurgerForm } from "../../components";

export default function Home() {
  return (
    <>
    <Banner />
    <div class="container">
      <h1>Build your burger</h1>
      <BurgerForm />
    </div>
    </>
  )
}