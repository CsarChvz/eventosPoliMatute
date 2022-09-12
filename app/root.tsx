import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { GlobalContext } from "./context/GlobalContext";
import WrapperGlobal from "./context/WrapperGlobal";

import styles from "./styles/app.css";

// Barras de navegacion

import { NavBar, SideBar } from "./utils/components/NavigationBar";
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en" className="bg-gray-100">
      <head>
        <Meta />
        <Links />
      </head>
      <WrapperGlobal>
        <body className="h-full dark:bg-gray-700">
          {/* Se cambiar el nombre del componente segun cual barra de navegacion se quiere mostrar */}
          <SideBar>
            <>
              <Outlet />
            </>
          </SideBar>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </WrapperGlobal>
    </html>
  );
}
