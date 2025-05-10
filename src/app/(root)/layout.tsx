import SideBar from "@/component/side-bar";
import "./root.scss"
import Profile from "@/component/profile-bar";
import { Dummy } from "@/lib/tempData";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
          <SideBar/>
          {children}
          <Profile 
            name={Dummy.firstName} 
            email={Dummy.email} 
            profile={Dummy.profile}
            fullName={`${Dummy.firstName} ${Dummy.lastName}`}
          />
        </>
    );
  }
  