import { Mail, PhoneCall } from "lucide-react";

export default function Contact() {
  return (
    <div className="size-full">
        <span className="text-5xl">
          <PhoneCall className="size-10"/> 
          <p>+1 469 922 7783</p>
        </span>
        <span>
          <Mail/> 
          <p>tdtran420@gmail.com</p>
        </span>
    </div>
  )
}