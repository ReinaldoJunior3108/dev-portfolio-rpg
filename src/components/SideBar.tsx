import MenuButtons from "./MenuButtons";

export default function SideBar() {
  return (
    <div className="w-64 bg-gray-800 border-4 border-yellow-700 p-4 text-center">
      <img src="/logo.png" alt="Logo" className="mx-auto mb-4 w-16" />
      <h2 className="text-white font-bold mb-4">Héric_Mendes</h2>
      <MenuButtons text="Home" />
      <MenuButtons text="My Profile" />
      <MenuButtons text="Skills" />
      <MenuButtons text="Projects" />
      <MenuButtons text="Contact" />
      <MenuButtons text="Blog" />
      <MenuButtons text="About" />
    </div>
  )}