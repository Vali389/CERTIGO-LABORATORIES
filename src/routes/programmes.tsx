import { createFileRoute, Outlet } from "@tanstack/react-router";
export const Route = createFileRoute("/programmes")({ component: Layout });
function Layout() { return <Outlet />; }
