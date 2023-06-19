//import { Toaster, toast } from 'sonner'
//import 'sonner/dist/sonner.css';

export function App() {
  return (
    <div>
      <Toaster />
      <button onClick={() => toast('My first toast')}>
        Give me a toast
      </button>
    </div>
  )
}
