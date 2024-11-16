import { SignUp } from '@clerk/nextjs';
import "/home/tarik/Dokumenty/e_commerce_militarik/ecommerce_admin/app/globals.css";

export default function Page() {
  return (
  <div className='h-screen flex justify-center items-center'>
    <SignUp />
  </div>
  );
}