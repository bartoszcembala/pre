import { useLogout } from "../hooks/useLogout";

export default function LogoutButton() {
  const mutation = useLogout();
  
  async function handleLogout() {
    await mutation.mutateAsync();
  }

  return <button onClick={handleLogout}>Logout</button>;
}
